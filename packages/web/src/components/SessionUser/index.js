import React from 'react';
import styled from 'styled-components';

const SessionUser = styled.div`
	align-items: center;
	background-color: #0009;
	border-radius: 20px;
	color: #fff;
	display: flex;
	padding: 2px 15px;
`;

const SessionUserImg = styled.img`
	border-radius: 50%;
	height: 28px;
	width: 28px;
`;

const SessionUserName = styled.span`
	margin-left: 5px;
	font-weight: bold;
`;

export default ({ name, img }) => {
	return (
		<SessionUser>
			<SessionUserImg src={img} />
			<SessionUserName>{name}</SessionUserName>
		</SessionUser>
	);
}
