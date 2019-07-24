import React, { useState } from 'react';
import firebase from '../../firebaseConfig';
import './CadBox.css'
import Button from '../button'
const firebaseAppAuth = firebase.auth();

export default function LoginBox (props){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signIn () {
    firebaseAppAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      firebase.firestore().collection('users').doc(result.user.uid).get().then((result) =>{
      return props.history.push("/feed")
    })
    }).catch(() => {
      alert("E-mail e/ou senha incorreto(s).");
    });
  }

  return (
    <section className="back-form ">
      <p>E-MAIL</p>
      <div>
        <input className="input-style" type="text" value={email}
        onChange={(event) => setEmail(event.target.value)} />
      </div>
      <p>SENHA</p>
      <div>
        <input  className="input-style" type="password" value={password}
        onChange={(event) => setPassword(event.target.value)} />
      </div>
      {/* <Button onClick={props.fgtOnClick}>ESQUECEU SUA SENHA?</Button>
      <Button onClick={() => signIn()}>ENTRAR</Button> */}

      <Button text="ENTRAR" onClick={() => signIn()}/>
      <p className="text-color"  onClick={props.fgtOnClick}>Esqueceu a senha ?</p>
      
    </section>
  );
}