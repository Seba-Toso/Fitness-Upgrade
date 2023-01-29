import React, { useEffect, useState } from "react";
import {firebaseApp} from "../db/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userIsLoading, setUserIsLoading] = useState(false)
  
  useEffect(() => {
    setCurrentUser(true)
    firebaseApp.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      user? console.log('Login Successful',) : console.log("There's no user logged")
      setUserIsLoading(false)
    });
  }, []);
  
  
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userIsLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};