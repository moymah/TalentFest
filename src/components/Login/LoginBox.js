import React, { useState } from 'react';
import firebase from '../../firebaseConfig';

const firebaseAppAuth = firebase.auth();

export default function LoginBox (props){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signIn () {
    firebaseAppAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      firebase.firestore().collection('users').doc(result.user.uid).get().then((result) =>{
      return props.history.push("/")
    })
    }).catch(() => {
      alert("E-mail e/ou senha incorreto(s).");
    });
  }

  return (
    <section>
      <p>E-MAIL</p>
      <div>
        <input type="text" value={email}
        onChange={(event) => setEmail(event.target.value)} />
      </div>
      <p>SENHA</p>
      <div>
        <input type="password" value={password}
        onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button onClick={props.fgtOnClick}>ESQUECEU SUA SENHA?</button>
      <button onClick={() => signIn()}>ENTRAR</button>
    </section>
  );
}