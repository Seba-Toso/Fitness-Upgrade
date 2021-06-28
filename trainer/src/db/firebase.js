import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';



const firebaseApp = firebase.initializeApp ({
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