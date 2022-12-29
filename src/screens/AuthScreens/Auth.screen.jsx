import React, { useState, useRef } from 'react';
import style from './Auth.module.css';
import { TextInput, Box, Title, Button } from '@mantine/core';
import { IconAt, IconAsteriskSimple } from '@tabler/icons';
import { useAuth } from '../../context/AuthContext';
// import Lottie from 'react-lottie';
// import FoodLottie from '../../assets/foodie.json';

// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: FoodLottie,
// };

export default function AuthScreen() {
  const overLapRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSignUp, handleSignIn } = useAuth();

  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      })}
      className={style.container}
    >
      <div ref={overLapRef} id='overLap' className={style.overLap}>
        {/* <Lottie options={defaultOptions} height={700} width={400} /> */}
      </div>
      <div className={style.singUp}>
        <Title order={1} className={style.title}>
          Sign Up
        </Title>
        <TextInput
          icon={<IconAt size={14} />}
          placeholder='Email'
          label='Email'
          description='Please Enter your email'
          variant='filled'
          radius='lg'
          size='lg'
          withAsterisk
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          icon={<IconAsteriskSimple size={14} />}
          placeholder='Password'
          label='Password'
          description='Please Enter your Password'
          variant='filled'
          radius='lg'
          size='lg'
          withAsterisk
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={() => handleSignUp(email, password)}
          color='teal'
          radius='lg'
          size='lg'
          className={style.btn}
        >
          Sing Up
        </Button>
        <Title
          onClick={() => {
            overLapRef.current.style = 'transform: translateX(0%)';
          }}
          color='teal'
          order={5}
          style={{
            cursor: 'pointer',
          }}
        >
          Already a User
        </Title>
      </div>
      <div className={style.signIn}>
        <Title order={1} className={style.title}>
          Sign In
        </Title>
        <TextInput
          icon={<IconAt size={14} />}
          placeholder='Email'
          label='Email'
          description='Please Enter your email'
          variant='filled'
          radius='lg'
          size='lg'
          withAsterisk
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          icon={<IconAsteriskSimple size={14} />}
          placeholder='Password'
          label='Password'
          description='Please Enter your Password'
          variant='filled'
          radius='lg'
          size='lg'
          withAsterisk
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          color='teal'
          radius='lg'
          size='lg'
          onClick={() => {
            handleSignIn(email, password);
          }}
          className={style.btn}
        >
          Sing In
        </Button>
        <Title
          onClick={() => {
            overLapRef.current.style = 'transform: translateX(100%)';
          }}
          color='teal'
          order={5}
          style={{
            cursor: 'pointer',
          }}
        >
          New user ?
        </Title>
      </div>
    </Box>
  );
}
