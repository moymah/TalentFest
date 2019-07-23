import React, {useState} from 'react';
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
    <section>
      <button onClick={props.onClickClose}>&times;</button>
      <p>ENVIAREMOS UM E-MAIL DE RECUPERAÇÃO DE SENHA PARA VOCÊ.</p>
      <p>E-MAIL</p>
      <div>
        <input value={email}
        onChange={event => setEmail(event.target.value)} />
      </div>
      <button onClick={() => recPass()}>ENVIAR</button>
    </section>
    );
}

export default PasswordModal;