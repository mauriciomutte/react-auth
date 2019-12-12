import React from 'react';

import { Button } from '../components/AuthForm';
import { useAuth } from '../context/auth';

export default function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
      <div>Admin Page</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}
