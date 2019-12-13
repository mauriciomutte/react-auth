import React from 'react';

import { Button } from '../components/AuthForm';
import { useAuth } from '../context/auth';

export default function Home(props) {
	const [, setState] = useAuth();

  function logOut() {
		setState({token: null});
  }

  return (
    <div>
      <div>Home Page</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}
