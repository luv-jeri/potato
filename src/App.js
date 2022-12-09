import './App.css';
import { Input, PasswordInput, Space, Button, Container } from '@mantine/core';
import { IconAt } from '@tabler/icons';
import { useEffect, useState } from 'react';
import useLocalState from './hooks/useLocalState';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [email, setEmail] = useLocalState('', 'potato_user_email');
  const [password, setPassword] = useLocalState('', 'potato_user_password');

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
  }, []);

  const singUp = async () => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log('user', user);
  };

  const signIn = async () => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
  };

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div className='App'>
      {isLogged ? (
        <Container>
          <h1>Welcome</h1>
          <Button variant='filled' color='pink' radius='lg' size='lg' onClick={logOut}>
            logout
          </Button>
        </Container>
      ) : (
        <Container
          size='xs'
          px='xl'
          style={{
            padding: '20px',
          }}
        >
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            icon={<IconAt />}
            placeholder='Your email'
          />
          <Space h='xl' />
          <PasswordInput
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            withAsterisk
          />
          <Space h='xl' />
          <Button variant='filled' color='pink' radius='lg' size='lg' onClick={singUp}>
            Sign up
          </Button>
          <Button variant='filled' color='pink' radius='lg' size='lg' onClick={signIn}>
            Sign In
          </Button>
        </Container>
      )}
    </div>
  );
}

export default App;
