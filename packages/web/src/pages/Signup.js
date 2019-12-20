import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import { Form, Title, Button, Error, Card } from '../components/AuthForm';
import { Label, InputText} from '../components/Form';
import Main from '../components/Main';

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
    return <Redirect to="/" />;
  }

  return (
    <Main withMenu={false}>
			<Card>
				<Title>Create your Account</Title>
				<Form>
					<Label>Name:</Label>
					<InputText
						type="text"
						value={name}
						onChange={e => { setName(e.target.value) }}
						placeholder="name"
					/>

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
					<Button type="submit" onClick={postSignup}>Sign Up</Button>
				</Form>
				<Link to="/login">Already have an account?</Link>
				{ isError && <Error>Opsss, houve algum erro!</Error> }
			</Card>
    </Main>
  );
}
