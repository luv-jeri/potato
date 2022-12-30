import React from 'react';
import style from './OverLoader.module.css';

function OverLoader() {
  return (
    <div className={style.container}>
      <img
        src='https://cdn-icons-png.flaticon.com/512/1037/1037855.png'
        className={style.logo}
        alt='logo'
      />
      <h1>Potato</h1>
    </div>
  );
}

export default OverLoader;
