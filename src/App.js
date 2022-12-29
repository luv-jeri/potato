import './App.css';
import HomeScreen from './screens/AppScreens/Home.screen';
import AuthScreen from './screens/AuthScreens/Auth.screen';
import { useAuth } from './context/AuthContext';

function App() {
  const { user } = useAuth();
  return <div className='App'>{user ? <HomeScreen /> : <AuthScreen />}</div>;
}

export default App;
