import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const environment = 'production'


const firebaseApp = environment === 'test' ?  
firebase.initializeApp ({
//Paste here firebase app test config
})
:
firebase.initializeApp ({
//Paste here firebase app config
});

const db = firebase.firestore();

export {
  db,
  firebaseApp,
}
