import React, {useState, useEffect} from 'react';
import firebase from '../firebaseConfig';
import Modal from 'react-modal';
import ModalEvent from '../components/ModalEvent';
import ModalShare from '../components/ModalShare';

export default function (props) {

    
const [events, setEvents] = useState([]);
const [modalIsOpen, setModalIsOpen] = useState(false);
const [modalShareIsOpen, setModalShareIsOpen] = useState(false);
const [editIsSelected, setEditIsSelected] = useState('');
const [newText, setNewText] = useState('');
const [auxState, setAuxState] = useState([]);

useEffect(() => {
    firebase.firestore().collection("events")
    .get()
    .then(function(querySnapshot) {
      const listEvents = querySnapshot.docs.map(function(doc) {
        return doc.data()
      });
      setEvents(listEvents);
    })
}, [auxState])

function renewMinorState(curArray){
  let newArray = [];
  for(let i of curArray) {
    newArray.push(i);
  }
  return newArray
}
useEffect(() => {
    console.log(events)
}, [events])

function editText(value, index, id) {
    if(editIsSelected === index) {
       return  <section>
                <textarea readonly={false} onChange={(event) => setNewText(event.target.value)}/>
                <button onClick={() => saveEdit(id)}>Salvar</button>
                </section>
        }else{
        return <p>{value}</p>}
   }

   function timeNow() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
    return new Date().toLocaleDateString('pt-BR', options)
  }

function saveEdit(id) {
    firebase.firestore().collection("events")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        if(doc.data().idEvent === id){
          firebase.firestore().collection("events").doc(doc.id).update({
            description: newText,
            date: timeNow()
          })
        }
      });
      setEditIsSelected('');

      setAuxState(renewMinorState([1,id,3]))

})
}

function confirmLike (bool, id) {
  firebase.firestore().collection("events")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        if(doc.data().idEvent === id){
          console.log("foi")
          firebase.firestore().collection("events").doc(doc.id).update({
            'liked': bool
          })
        }
      });
      setAuxState(renewMinorState([1,id,3]))
  })
}

function checkLike(bool, index){
  return bool === true ? 
  <button onClick={() => confirmLike(!bool, index)}>curtido</button> : 
  <button onClick={() => confirmLike(!bool, index)}>curtir</button>
           
}

function checkOwner (id, index) {
  if(id === firebase.auth().currentUser.uid) { 
    return <button onClick={() => setEditIsSelected(index)}>editar</button>
  }
            
}


    return(
        <div>
        <section>
        <button onClick={() => setModalIsOpen(true)}>criar evento</button>
        <div>
        {events.map((curr, index) => {
            return <div key={index}>
                <h2>{curr.eventName}</h2>
                {editText(curr.description, index, curr.idEvent)}
                <p>{curr.date}</p>
            <button onClick={() => setModalShareIsOpen(true)}>compartilha</button>
            {checkLike(curr.liked, index)}
            {checkOwner(curr.idUser, index)}
            </div>
        })}
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
          <ModalEvent></ModalEvent> 
        </Modal>
        <Modal isOpen={modalShareIsOpen} onRequestClose={()=>setModalShareIsOpen(false)}>
          <ModalShare ></ModalShare> 
        </Modal>
        </section>
        </div>
)
}