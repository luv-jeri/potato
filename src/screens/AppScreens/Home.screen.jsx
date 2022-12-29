import React from 'react';
import { Button } from '@mantine/core';
import { useAuth } from '../../context/AuthContext';

export default function HomeScreen() {
  const { handleSignOut } = useAuth();
  return (
    <div>
      Home.screen
      <Button onClick={handleSignOut}>Button</Button>
    </div>
  );
}
