import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB70ETqdtJOhKJup8E7GxF7KGwaTvANuOk',
  authDomain: 'potato-41067.firebaseapp.com',
  projectId: 'potato-41067',
  storageBucket: 'potato-41067.appspot.com',
  messagingSenderId: '596632285209',
  appId: '1:596632285209:web:162d5a7e16ca69437eba88',
  measurementId: 'G-RBZXSZM4FL',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
