import { createContext, useState, useEffect, useContext } from 'react';
import { auth, db } from '../firebase/index';
import { doc, setDoc } from 'firebase/firestore';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const AuthContext = createContext();

const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {});
    return unsubscribe;
  }, []);

  const handleSignUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        handleSignUp,
        handleSignIn,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
