import React, { useEffect, useState } from "react";
import {firebaseApp} from "../db/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      user? console.log('Sesión iniciada de: ', user.email) : console.log('No hay sesión activa')
    });
  }, []);
  
  
  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};