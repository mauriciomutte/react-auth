import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Menu from '../components/Menu';
import Main from '../components/Main';
import Header from '../components/Header';
import { Form, Label, InputText, Submit } from '../components/Form';

export default function Profile() {
  const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	useEffect(() => {
		const userID = localStorage.getItem('user-id');

		Axios.get(`http://localhost:3030/profile/${userID}`)
			.then(({ data }) => {
				setName(data.name);
				setEmail(data.email);
			})
			.catch(e => console.log(e));
	}, []);

	async function updateProfile(e) {
		const userID = localStorage.getItem('user-id');

		await Axios.put(`http://localhost:3030/profile/${userID}`, {
			name,
			email
		}).catch(e => console.log(e));
	}

  return (
		<div>
			<Menu />
			<Main withMenu={true}>
				<Header
					pageTitle="Profile"
					userImg="https://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/Ahri.png"
				/>
				<Form>
					<Label>Name:</Label>
					<InputText
						type="text"
						value={name}
						onChange={e => { setName(e.target.value) }}
					/>

					<Label>Email:</Label>
					<InputText
						type="email"
						value={email}
						onChange={e => { setEmail(e.target.value) }}
					/>

					<Submit type="submit" onClick={updateProfile}>Submit</Submit>
				</Form>
			</Main>
		</div>
  );
}
