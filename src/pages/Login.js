import React, {useState} from 'react';
import Tab from '../components/Tab';
import LoginBox from '../components/Login/LoginBox';
import CadBox from '../components/Login/CadBox';
import Modal from 'react-modal';
import PasswordModal from '../components/Login/PasswordModal'
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';

const firebaseAppAuth = firebase.auth();

function Login (props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
        <div className="div-nav">
          <nav className="nav_tabs">
  			    <ul>
	  			    <li>
                <Tab classNameContent="tab-content" id="tab1" text="LOGIN" checked="true"> 
                  <LoginBox history={props.history} fgtOnClick={(e) => setModalIsOpen(true)}/>
                </Tab>
              </li>
              <li>
                <Tab classNameContent="tab-content" id="tab2" text="CADASTRO">  
                  <CadBox history={props.history}/>
                </Tab>
              </li>
            </ul>
          </nav>
        </div>
        <Modal className="modal-style" isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
          <PasswordModal onClickClose={()=>setModalIsOpen(false)}/>  
        </Modal>
    </div>
  );
}

export default withFirebaseAuth({
  firebaseAppAuth,
})(Login);