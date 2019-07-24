import React,{useEffect, useState} from 'react';
import firebase from '../firebaseConfig';
import UploadImage from './UploadImage';
import './ModalEvent.css'
import M from "materialize-css";

export default function (props) {
    const [eventName, setEventName] = useState('');
    const [events, setEvents] = useState([]);
    const [description, setDescription] = useState('');
    const [currentUser, setCurrentUser] = useState('');

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
       setCurrentUser(firebase.auth().currentUser)

    },[])

    useEffect(() => {
        console.log(eventName, description)
        console.log(currentUser.displayName)       

    }, [description, eventName])

    function timeNow() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
        return new Date().toLocaleDateString('pt-BR', options)
        }

    
function sendEventToFirebase(event) {
    event.preventDefault();
    if(eventName.length > 80 || eventName.length === 0 || description.length > 500 || description.length > 500 ){
        alert("Não foi possivel enviar seu evento! Cheque o tamanho dos textos informados.")
    }else{
    firebase.firestore().collection('events').doc().set({
        eventName,
        description,
        'idUser': currentUser.uid,
        'name': currentUser.displayName,
        'date': timeNow(),
        'idEvent': events.length,
        'liked' : false, 
        'compartilhado': ["a","b"]
    }).then(
        alert("Evento criado com sucesso!"),
        props.closeModal(false)
    )
    }
}

    return(
        <form>
            <label for="event-name" class="event-labels">Nome</label>  
            <input type="text" className="event-input" onChange={(event) => setEventName(event.target.value)}placeholder="Nome do Evento - Até 80 caracteres" id="event"/>
            <span>{eventName.length}</span>
            <label for="event-description" class="event-labels">Descrição</label> 
            <textarea cols="40" className="event-input" onChange={(event) => setDescription(event.target.value)} rows="6" placeholder="Descrição - Até 500 caracteres"  id="description"/>
            <span>{description.length}</span>
            <div className="container photo-container">
            <label for="event-photo" class="event-labels">Insira uma foto:</label> 
            <input className="file" type="file" id="photo" onChange={(event) => UploadImage(event.target.files) }/>
            </div>
            <button className="event-button" onClick={(event) => sendEventToFirebase(event)}>Criar Evento</button> 
            </form>

    )

}