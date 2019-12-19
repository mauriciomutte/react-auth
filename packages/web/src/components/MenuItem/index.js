import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuItem = styled.li`
	margin: 8px 0;
	border-radius: 3px;
	background-color: #fff2;

	a {
		color: #fff;
		display: block;
		font-weight: bold;
		text-decoration: none;
		padding: 12px;
	}

	:hover {
		background-color: #fff4;
	}
`;

export default ({ name, link }) => {
	return (
		<MenuItem>
			<Link to={link}>{name}</Link>
		</MenuItem>
	);
}
