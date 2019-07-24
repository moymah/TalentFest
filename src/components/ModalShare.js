import React, {useState, useEffect} from 'react';
import firebase from '../firebaseConfig';
import './ModalShare.css'


export default function (props) {
    const [funcionarios, setFuncionarios] = useState([]);
    const [selected, setSelected] = useState([]);
    const [selecionadosName, setSelecionadosName] = useState([]);

    useEffect(() => {
        firebase.firestore().collection("users")
        .get()
        .then(function(querySnapshot) {
          const listFuncionarios = querySnapshot.docs.map(function(doc) {
            return doc.data()
          });
          setFuncionarios(listFuncionarios);
        })
    }, [])

    useEffect(() => {
        console.log(selected)
    }, [selected])

    function selectEmployees(choosen, name) {
        if(selected.length <5){
            const hasAlready = selected.findIndex(current => current === choosen);
        if(hasAlready !== -1){ 
            selected.splice(hasAlready, 1)
            selecionadosName.splice(hasAlready, 1)
        }else{
            setSelected(() => { return [...selected, choosen] })
            setSelecionadosName(() => { return [...selecionadosName, name]})
        }
        }else{
            alert("Número máximo de opções de compartilhamentos selecionado!")
        }
}
    
      function sendToEmployees() {
        firebase.firestore().collection("events")
        .get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
        if(doc.data().idEvent === props.event){
          firebase.firestore().collection("events").doc(doc.id).update({
            'compartilhado' : selected
          })
        }
      });
      })
      alert("Evento compartilhado com sucesso!")
      props.closeModal(false)
    }

 
    
   return(
        <section className="displayBlock">
        <section className="displayFlex">
        {funcionarios.map( (elem, index) => {
            return <section className="card-search" key={index} onClick={() => selectEmployees(elem.userUid, elem.name)}>
            <img className="image-search"src='https://www.fiaregion1.com/wp-content/uploads/2018/06/gdpr_profile-picture.jpg' id={elem.userUid} alt='profile-image'/>
                <section>
                    <p htmlFor={elem.userUid}>{elem.name}</p>
                </section>
            </section>
        })}
        </section>
        <p>{selecionadosName.join(", ")}</p>
        <button className="btn-share" onClick={() => {sendToEmployees()}}>ENVIAR</button>
        </section>
    )

}