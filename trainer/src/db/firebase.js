import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

//Change this to set env
const environment = process.env.REACT_APP_ENV || 'production'

const firebaseApp = environment === 'test' ?  
firebase.initializeApp ({
  //Paste here firebase app test config
  apiKey:  process.env.REACT_APP_APIKEY_TEST,
  authDomain:  process.env.REACT_APP_AUTHDOMAIN_TEST,
  databaseURL:  process.env.REACT_APP_DATABASEURL_TEST,
  projectId:  process.env.REACT_APP_PROJECTID_TEST,
  storageBucket:  process.env.REACT_APP_STORAGEBUCKET_TEST,
  messagingSenderId:  process.env.REACT_APP_MESSAGINGSENDERID_TEST,
  appId:  process.env.REACT_APP_APPID_TEST
})
:
firebase.initializeApp ({
  apiKey:  process.env.REACT_APP_APIKEY,
  authDomain:  process.env.REACT_APP_AUTHDOMAIN,
  databaseURL:  process.env.REACT_APP_DATABASEURL,
  projectId:  process.env.REACT_APP_PROJECTID,
  storageBucket:  process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAGINGSENDERID,
  appId:  process.env.REACT_APP_APPID
});

const db = firebase.firestore();

export {
  db,
  firebaseApp,
}
