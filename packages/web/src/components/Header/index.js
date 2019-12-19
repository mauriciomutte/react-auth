import React from 'react';
import styled from 'styled-components';

import SessionUser from '../SessionUser';

const Header = styled.div`
	display: flex;
	padding: 10px 20px;
	align-items: center;
	justify-content: space-between;

	h1 {
		color: #6371c7;
		font-weight: bold;
		font-size: 32px;
	}
`;

export default ({ pageTitle, userName, userImg }) => {
	return (
		<Header>
			<h1>{pageTitle}</h1>
			<SessionUser
				name={userName}
				img={userImg}
			/>
		</Header>
	);
}
