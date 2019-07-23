import React, {useState} from 'react';
import Button from '../Button.js'
import Input from '../Input'
import './Modal.css'
import firebase from '../../firebaseConfig';
const firebaseAppAuth = firebase.auth();

function PasswordModal (props){

  const [email, setEmail] = useState('');
    
  function recPass ()  {
    firebaseAppAuth.sendPasswordResetEmail(email).then(() => {
      alert("E-mail enviado!");
      props.onClickClose();
    }).catch(() => {
      alert("Oops. Algo deu errado! :( \nCheque se o e-mail está escrito corretamente.");
    });
  };

  return (
    <section className="grid-recpass">
      <Button className="btn btn-close" onClick={props.onClickClose} text="&times;" />
      <p className="about-recpass">ENVIAREMOS UM E-MAIL DE RECUPERAÇÃO DE SENHA PARA VOCÊ.</p>
      <p className="p-recpass-email">E-MAIL</p>
      <div className= "inp-recpass-email">
        <Input value={email}
        onChange={event => setEmail(event.target.value)} />
        <i className="fas fa-envelope"></i>
      </div>
      <Button className="btn btn-recpass" text="ENVIAR" onClick={() => recPass()} />
    </section>
    );
}

export default PasswordModal;