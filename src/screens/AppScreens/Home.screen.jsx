import React from 'react';
import { Button } from '@mantine/core';
import { useAuth } from '../../context/AuthContext';

export default function HomeScreen() {
  const { handleSignOut, user } = useAuth();
  return (
    <div>
      Home.screen
      <h1>
        Welcome {user.name} {user.email}
      </h1>
      <img
        src={user.DP_URL}
        alt={user.name}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
        }}
      />
      <Button onClick={handleSignOut}>Logout</Button>
    </div>
  );
}
