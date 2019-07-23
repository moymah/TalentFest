import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyB5grMRJ7fPTOSi-4j2y9FEhtxsXtjjB24",
  authDomain: "talentfest-72c74.firebaseapp.com",
  databaseURL: "https://talentfest-72c74.firebaseio.com",
  projectId: "talentfest-72c74",
  storageBucket: "talentfest-72c74.appspot.com",
  messagingSenderId: "139936811233",
  appId: "1:139936811233:web:b4d3353956905227"
};

firebase.initializeApp(config);

export default firebase;