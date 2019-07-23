import React,{useEffect, useState} from 'react';
import firebase from '../firebaseConfig';
import UploadImage from './UploadImage'

export default function () {
    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        console.log(eventName, description)
    }, [description, eventName])

    
function sendEventToFirebase() {
    firebase.firestore().collection('events').doc().set({
        eventName,
        description
    }).then(
        alert("Evento criado com sucesso!")
    ).catch(
        alert("Oops.")
    )
}
    
    return(
        <section>
        <input type="text" onChange={(event) => setEventName(event.target.value)}placeholder="Nome do Evento" id="event"/>
        <textarea cols="40" onChange={(event) => setDescription(event.target.value)} rows="6" placeholder="Descrição"  id="description"/>
        <input type="file" id="photo" onChange={(event) => UploadImage(event.target.files) }/>
        <button onClick={() => sendEventToFirebase()}>Criar Evento</button> 
        </section>
    )

}