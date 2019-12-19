import React from 'react';

import Main from '../components/Main';
import { Button, Title } from '../components/AuthForm';
import { useAuth } from '../context/auth';

export default function Home() {
	const [, setToken] = useAuth();

  function logOut() {
		localStorage.clear();
		setToken(null);
  }

  return (
		<div>
			<Main>
				<Title>Home Page</Title>
				<Button onClick={logOut}>Log out</Button>
			</Main>
		</div>
  );
}
