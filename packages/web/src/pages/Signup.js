import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import { Card, Title, Form, Input, Button, Error } from '../components/AuthForm';

export default function Signup() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  function postSignup() {
    axios.post('http://localhost:3030/register', {
      name,
      email,
      password
    }).then(result => {
      if(result.status === 200) {
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <Card>
			<Title>Signup</Title>
      <Form>
        <Input
          type="text"
          value={name}
          onChange={e => { setName(e.target.value) }}
          placeholder="name"
        />
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
        <Button type="submit" onClick={postSignup}>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
      { isError && <Error>Opsss, houve algum erro!</Error> }
    </Card>
  );
}
