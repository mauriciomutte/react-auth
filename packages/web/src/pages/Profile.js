import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Menu from '../components/Menu';
import Main from '../components/Main';
import Header from '../components/Header';
import { Form, Label, InputText, ProfileImage, Submit } from '../components/Form';

export default function Profile() {
  const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	useEffect(() => {
		const userID = localStorage.getItem('user-id');

		Axios.get(`http://localhost:3030/profile/${userID}`)
			.then(({ data }) => {
				setName(data.name);
				localStorage.setItem('user-name', data.name);
				setEmail(data.email);
			})
			.catch(e => console.log(e));
	}, []);

  return (
		<div>
			<Menu />
			<Main>
				<Header
					pageTitle="Profile"
					userImg="https://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/Ahri.png"
				/>
				<Form>
					<Label>Your photo:</Label>
					<ProfileImage>
						<img src="https://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/Ahri.png" alt="" />
						<input type="file" />
					</ProfileImage>

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

					<Submit type="submit" >Submit</Submit>
				</Form>
			</Main>
		</div>
  );
}
