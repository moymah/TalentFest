import React, {useState} from 'react';
import firebase from '../../firebaseConfig';

const firebaseAppAuth = firebase.auth();

export default function CadBox (props){

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [sobrenome, setSobrenome] = useState('');

	function createUser () {
		if (name !== "") {
			firebaseAppAuth.createUserWithEmailAndPassword(email, password)
			.then((result) => {
				firebase.auth().currentUser.updateProfile({
					displayName: name
				  })
				firebase.firestore().collection('users').doc(result.user.uid).set({
					name,
					sobrenome,
					email
				})
				// return props.history.push("/" + area)   
			})
			.catch((error) => {
				console.log(error)
				alert("Oops. Algo deu errado! :( \nCheque se o e-mail está escrito corretamente e se sua senha possui pelo menos 6 caracteres.")
			});
		}else{
			alert("Não esqueça de informar seu nome!")
		}
	}
    
	return (
		<container>
			<p>NOME</p>
			<section>
				<input type="text" value={name}
				onChange={(event) => setName(event.target.value)} />
			</section>
			<p>SOBRENOME</p>
			<section>
				<input type="text" value={sobrenome}
				onChange={(event) => setSobrenome(event.target.value)} />
			</section>
			<p>E-MAIL</p>
			<section>
				<input type="text" value={email}
				onChange={(event) => setEmail(event.target.value)} />
			</section>
			<p>SENHA</p>
			<section>
				<input type="password" value={password}
				onChange={(event) => setPassword(event.target.value)} />
			</section>
			<button onClick={() => createUser()}>ENTRAR</button>
		</container>
	);
}