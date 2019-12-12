import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import { Card, Form, Input, Button } from '../components/AuthForm';
import { useAuth } from '../context/auth';

export default function Signup() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthTokens } = useAuth();

  function postSignup() {
    axios.post('http://localhost:3030/register', {
      name,
      email,
      password
    }).then(result => {
      if(result.status === 200) {
        setAuthTokens(result.data);
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
    </Card>
  );
}