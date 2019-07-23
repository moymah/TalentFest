import React, {useState, useEffect} from 'react';
import firebase from '../firebaseConfig';
import Modal from 'react-modal';
import ModalEvent from '../components/ModalEvent';
import ModalShare from '../components/ModalShare';

export default function (props) {

const [funcionarios, setFuncionarios] = useState([])
const [modalIsOpen, setModalIsOpen] = useState(false);
const [modalShareIsOpen, setModalShareIsOpen] = useState(false);

useEffect(() => {
    console.log("oi")
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
    console.log(funcionarios)
}, [funcionarios])


    return(
        <div>
        <section>
        <button onClick={() => setModalIsOpen(true)}>clicaaaa</button>
        <button onClick={() => setModalShareIsOpen(true)}>compartilha</button>
        <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
          <ModalEvent values={funcionarios}></ModalEvent> 
        </Modal>
        <Modal isOpen={modalShareIsOpen} onRequestClose={()=>setModalShareIsOpen(false)}>
          <ModalShare></ModalShare> 
        </Modal>
        </section>
        </div>
)
}