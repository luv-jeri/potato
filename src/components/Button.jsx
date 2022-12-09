import React from 'react';
console.log(React);

const style = {
  primary: {
    backgroundColor: 'blue',
    color: 'white',
  },
  secondary: {
    backgroundColor: 'red',
    color: 'white',
  },
  muted: {
    backgroundColor: 'grey',
    color: 'white',
  },
};

export default function Button({ title, onClick, variant = 'primary' }) {
  if (typeof onClick !== 'function') throw new Error('onClick must be a function');

  return (
    <button
      style={{
        ...style[variant],
      }}
      onClick={onClick}
      className='btn'
    >
      {title}
    </button>
  );
}
