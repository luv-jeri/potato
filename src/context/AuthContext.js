import { createContext, useState, useEffect, useContext } from 'react';
import { auth, db } from '../firebase/index';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import OverLoader from '../components/Loader/OverLoader';

const AuthContext = createContext();

const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDoc = doc(db, 'users', user.uid);
        const document = await getDoc(userDoc);
        setUser(document.data());
      } else {
        setUser(null);
      }

      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const handleSignUp = async ({ password, name, email, DP_URL }) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const userDoc = doc(db, 'users', user.uid);
    await setDoc(userDoc, {
      name,
      email,
      uid: user.uid,
      DP_URL,
    });
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
      {loading && <OverLoader />}
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
