import React, {  useRef } from 'react';
import style from './Auth.module.css';
import {  Box } from '@mantine/core';

import SignInComponent from '../../components/Auth/SignInComponent/SignInComponent';
import SignUpComponent from '../../components/Auth/SignUpComponent/SignUpComponent';

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
        <img
          className={style.logo}
          src='https://cdn-icons-png.flaticon.com/512/1037/1037855.png'
          alt='food'
        />
        <h1>Potato</h1>
      </div>
      <div className={style.singUp}>
        <SignUpComponent overLapRef={overLapRef} />
      </div>
      <div className={style.signIn}>
        <SignInComponent overLapRef={overLapRef} />
      </div>
    </Box>
  );
}
