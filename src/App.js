import './App.css';
import { useEffect, useState } from 'react';
import HomeScreen from './screens/AppScreens/Home.screen';
import AuthScreen from './screens/AuthScreens/Auth.screen';
import { auth } from './firebase';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogged(true);
      }
    });
  }, []);

  return <div className='App'>{isLogged ? <HomeScreen /> : <AuthScreen />}</div>;
}

export default App;
