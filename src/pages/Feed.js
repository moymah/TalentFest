import React, {useState, useEffect} from 'react';
import firebase from '../firebaseConfig';
import Modal from 'react-modal';
import ModalEvent from '../components/ModalEvent';
import ModalShare from '../components/ModalShare';

export default function (props) {

    
const [events, setEvents] = useState([]);
const [modalIsOpen, setModalIsOpen] = useState(false);
const [modalShareIsOpen, setModalShareIsOpen] = useState(false);

useEffect(() => {
    firebase.firestore().collection("events")
    .get()
    .then(function(querySnapshot) {
      const listEvents = querySnapshot.docs.map(function(doc) {
        return doc.data()
      });
      setEvents(listEvents);
    })
}, [])

useEffect(() => {
    console.log(events)
}, [events])


    return(
        <div>
        <section>
        <button onClick={() => setModalIsOpen(true)}>criar evento</button>
        <div>
        {events.map((curr, index) => {
            return <div key={index}>
                <p>{curr.eventName}</p>
                <p>{curr.description}</p>
                <p>{curr.date}</p>
            <button onClick={() => setModalShareIsOpen(true)}>compartilha</button>
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