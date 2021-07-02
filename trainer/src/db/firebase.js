import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';



const firebaseApp = firebase.initializeApp ({
    //firebase api keys
  });

  

const db = firebase.firestore();

export {
  db,
  firebaseApp,
 
}
