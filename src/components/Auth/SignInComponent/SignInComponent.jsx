import React, { useState } from 'react';
import style from './SignInComponent.module.css';
import { TextInput, Title, Button } from '@mantine/core';
import { IconAt, IconAsteriskSimple } from '@tabler/icons';
import { useAuth } from '../../../context/AuthContext';

export default function SignInComponent({ overLapRef }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSignIn } = useAuth();

  return (
    <>
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
    </>
  );
}
