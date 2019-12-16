import React from 'react';

import { Card, Button, Title } from '../components/AuthForm';
import { useAuth } from '../context/auth';

export default function Home() {
	const [, setToken] = useAuth();

  function logOut() {
		localStorage.clear();
		setToken(null);
  }

  return (
    <Card>
      <Title>Home Page</Title>
      <Button onClick={logOut}>Log out</Button>
    </Card>
  );
}
