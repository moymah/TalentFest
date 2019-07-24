import React,{useEffect, useState} from 'react';
import firebase from '../firebaseConfig';
import UploadImage from './UploadImage';

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
    
    return(
        <section>
        <input type="text" onChange={(event) => setEventName(event.target.value)}placeholder="Nome do Evento" id="event"/>
        <textarea cols="40" onChange={(event) => setDescription(event.target.value)} rows="6" placeholder="Descrição"  id="description"/>
        <input type="file" id="photo" onChange={(event) => UploadImage(event.target.files) }/>
        <button onClick={() => sendEventToFirebase()}>Criar Evento</button> 
        </section>
    )

}