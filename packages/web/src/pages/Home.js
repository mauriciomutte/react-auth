import React from 'react';

import { Button } from '../components/AuthForm';
import { useAuth } from '../context/auth';

export default function Home(props) {
	const [, setToken] = useAuth();

  function logOut() {
		localStorage.clear();
		setToken(null);
  }

  return (
    <div>
      <div>Home Page</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}
