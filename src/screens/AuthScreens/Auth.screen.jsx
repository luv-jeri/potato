import React, { useState, useEffect, useRef } from 'react';
import style from './Auth.module.css';
import { TextInput, Box, Title, Button } from '@mantine/core';
import { IconAt, IconAsteriskSimple } from '@tabler/icons';

export default function AuthScreen() {
  const overLapRef = useRef(null);

  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      })}
      className={style.container}
    >
      <div ref={overLapRef} id='overLap' className={style.overLap}>
        Hello to potato
      </div>
      <div className={style.singUp}>
        <Title order={1}>Sign Up</Title>
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
        />
        <Button
          onClick={() => {
            overLapRef.current = overLapRef.current + 1;

            console.log('overLapRef', overLapRef);
          }}
          color='teal'
          radius='lg'
          size='lg'
        >
          Sing Up
        </Button>
        <Title
          onClick={() => {
            overLapRef.current.style = 'transform: translateX(0%)';
          }}
          color='teal'
          order={5}
        >
          Already a User
        </Title>
      </div>
      <div className={style.signIn}>
        <Title order={1}>Sign In</Title>
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
        />
        <Button color='teal' radius='lg' size='lg'>
          Sing In
        </Button>
        <Title
          onClick={() => {
            overLapRef.current.style = 'transform: translateX(100%)';
          }}
          color='teal'
          order={5}
        >
          New user ?
        </Title>
      </div>
    </Box>
  );
}
