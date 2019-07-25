import React, {useState} from 'react';
import Logo from '../images/logo.png';
/* import Tab from '../components/Tab';*/ 
import {Tabs, Tab} from 'react-materialize';
import LoginBox from '../components/Login/LoginBox';
import CadBox from '../components/Login/CadBox';
import Modal from 'react-modal';
import PasswordModal from '../components/Login/PasswordModal'
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import "../components/app.css"

const firebaseAppAuth = firebase.auth();

function Login (props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <div className="logo">
        <figure ><img src={Logo}></img></figure>
      </div>
        <div className="div-na">
          <Tabs className="tab-demo z-depth-1" options={{swipeable: true}}>
                <Tab title="login"> 
                  <LoginBox history={props.history} fgtOnClick={(e) => setModalIsOpen(true)}/>
                </Tab>
                <Tab title="cadastro">  
                  <CadBox history={props.history}/>
                </Tab>
              </Tabs>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
          <PasswordModal onClickClose={()=>setModalIsOpen(false)}/>  
        </Modal>
    </div>
  );
}

export default withFirebaseAuth({
  firebaseAppAuth,
})(Login);