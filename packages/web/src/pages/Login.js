import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import { Card, Title, Form, Input, Button, Error } from '../components/AuthForm';
import { useAuth } from '../context/auth';

export default function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [, setToken] = useAuth();

  function postLogin() {
    axios.post('http://localhost:3030/login', {
      email,
      password
    }).then(result => {
      if(result.status === 200) {
				setToken(result.data.token);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Card>
			<Title>Login</Title>
      <Form>
        <Input
          type="email"
          value={email}
          onChange={e => { setEmail(e.target.value) }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => { setPassword(e.target.value) }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
      { isError && <Error>The email or password provided were incorrect!</Error> }
    </Card>
  );
}
