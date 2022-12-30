import React, { useState } from 'react';
import style from './SignUpComponent.module.css';
import { TextInput, Title, Button } from '@mantine/core';
import { IconAt, IconAsteriskSimple } from '@tabler/icons';
import { useAuth } from '../../../context/AuthContext';
import UploadImage from '../../UploadImage/UploadImage';
import { storage } from '../../../firebase';
export default function SignUpComponent({ overLapRef }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [DP_URL, setDP_URL] = useState(null);

  const { handleSignUp } = useAuth();

  const onClick = () => {
    handleSignUp({ email, password, name, DP_URL });
  };

  return (
    <>
      <Title order={1} className={style.title}>
        Sign Up
      </Title>
      <UploadImage onComplete={setDP_URL} storage={storage} />
      <TextInput
        icon={<IconAt size={14} />}
        placeholder='Name'
        label='Name'
        description='Please Enter your email'
        variant='filled'
        radius='lg'
        size='lg'
        withAsterisk
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <Button onClick={onClick} color='teal' radius='lg' size='lg' className={style.btn}>
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
    </>
  );
}
