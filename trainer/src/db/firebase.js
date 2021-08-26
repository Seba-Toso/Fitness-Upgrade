import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const environment = 'production'


const firebaseApp = environment === 'test' ?  
firebase.initializeApp ({
	apiKey: "AIzaSyAVraOQGECB5a8AyvySXNgouv9oQg2RBHY",
	authDomain: "it-devs-testing-db.firebaseapp.com",
	projectId: "it-devs-testing-db",
  databaseURL: "https://it-devs-testing-db.firebaseio.com",
	storageBucket: "it-devs-testing-db.appspot.com",
	messagingSenderId: "175908001248",
	appId: "1:175908001248:web:51738ab93f51a1261fc785"
})
:
firebase.initializeApp ({
  apiKey: "AIzaSyDakiQSqn1GyJsIuuEu9bN5YqCROtMhwVA",
  authDomain: "personaltrainer-8747d.firebaseapp.com",
  databaseURL: "https://personaltrainer-8747d-default-rtdb.firebaseio.com",
  projectId: "personaltrainer-8747d",
  storageBucket: "personaltrainer-8747d.appspot.com",
  messagingSenderId: "702201037787",
  appId: "1:702201037787:web:31d032e52b2c71bb541dfe"
});

const db = firebase.firestore();

export {
  db,
  firebaseApp,
}
