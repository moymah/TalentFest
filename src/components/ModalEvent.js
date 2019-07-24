import React,{useEffect, useState} from 'react';
import firebase from '../firebaseConfig';
import UploadImage from './UploadImage';
import './ModalEvent.css'

export default function () {
    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');
    const [currentUser, setCurrentUser] = useState('');

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

    
function sendEventToFirebase() {
    firebase.firestore().collection('events').doc().set({
        eventName,
        description,
        'idUser': currentUser.uid,
        'name': currentUser.displayName,
        'date': timeNow()
    }).then(
        alert("Evento criado com sucesso!")
    ).catch(
        alert("Oops.")
    )
}
    //só para conseguir commitar//
    return(
        <form> 
            <label for="event-name" class="event-labels">Nome</label>    
            <input  type="text" className="event-input" onChange={(event) => setEventName(event.target.value)}placeholder="Nome do Evento" id="event"/>
            <label for="event-description" class="event-labels">Descrição</label> 
            <textarea cols="40" className="event-input" onChange={(event) => setDescription(event.target.value)} rows="6" placeholder="Descrição"  id="description"/>
            <div className="container photo-container">
            <label for="event-photo" class="event-labels">Insira uma foto:</label> 
            <input type="file" className="file" id="photo" onChange={(event) => UploadImage(event.target.files) }/>
            </div>
            <button className="event-button" onClick={() => sendEventToFirebase()}>Criar Evento</button>
        </form>
    )

}