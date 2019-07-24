import React, {useState, useEffect} from 'react';
import firebase from '../firebaseConfig';
import Modal from 'react-modal';
import ModalEvent from '../components/ModalEvent';
import ModalShare from '../components/ModalShare';
import NavBar from '../components/NavBar';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import './Feed.css'

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
                <button class="waves-effect waves-light btn-small" onClick={() => saveEdit(id)}>Salvar</button>
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
  <button class ='waves-effect waves-light btn orange custom-button ' onClick={() => confirmLike(!bool, index)}>curtido</button> : 
  <button class ='waves-effect waves-light btn orange custom-button' onClick={() => confirmLike(!bool, index)}>curtir</button>
        
}

function checkOwner (id, index) {
  if(id === firebase.auth().currentUser.uid) { 
    return <button onClick={() => setEditIsSelected(index)}>editar</button>
  }
            
}

    return(
        <div>
          <NavBar />
        <section>
          <h3>Feed de Eventos</h3>
        <button class ='waves-effect waves-light btn orange custom-button ' onClick={() => setModalIsOpen(true)}>criar evento</button>
        <div>
        {events.map((curr, index) => {
            return <div class="row">
            <div class="col s12 m6">
              <div class="card yellow lighten-5">
                <div class="card-content white-text">
            <div key={index}>
                <h2 class="card-title black-text">{curr.eventName}</h2>
                {editText(curr.description, index, curr.idEvent)}
                <p class="black-text">{curr.date}</p>
                </div>
              <div class="card-action">
            <button class ='waves-effect waves-light btn orange custom-share-button' onClick={() => setModalShareIsOpen(true)}>compartilha</button>
            {checkLike(curr.liked, index)}
            {checkOwner(curr.idUser, index)}
            </div>
            </div>
      </div>
    </div>
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