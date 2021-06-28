import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { firebaseApp } from './db/firebase';
import { FirebaseAppProvider } from 'reactfire';
import { Provider } from 'react-redux'
import generateStore from './state/store';
import { AuthProvider } from './components/Auth';



let store = generateStore()



const Root = () => {

  return(
    <FirebaseAppProvider firebaseApp={ firebaseApp }>
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider> 
      </Provider>
    </FirebaseAppProvider>
  )
}

render(<Root />, document.getElementById("root"));
reportWebVitals();
