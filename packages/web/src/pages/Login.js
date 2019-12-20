import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import { Card, Title, Form, Button, Error } from '../components/AuthForm';
import { Label, InputText} from '../components/Form';
import Main from '../components/Main';

import { useAuth } from '../context/auth';

export default function Login() {
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
				localStorage.setItem('user-id', result.data.id)
				localStorage.setItem('user-name', result.data.name)
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
		<Main haveMenu={false}>
			<Card>
				<Title>Sign in to Company</Title>
				<Form>
					<Label>Email:</Label>
					<InputText
						type="email"
						value={email}
						onChange={e => { setEmail(e.target.value) }}
						placeholder="email"
					/>

					<Label>Password:</Label>
					<InputText
						type="password"
						value={password}
						onChange={e => { setPassword(e.target.value) }}
						placeholder="password"
					/>
					<Button type="submit" onClick={postLogin}>Sign In</Button>
				</Form>
				<Link to="/signup">Don't have an account?</Link>
				{ isError && <Error>The email or password provided were incorrect!</Error> }
			</Card>
		</Main>
  );
}
