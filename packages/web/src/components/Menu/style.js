import styled from 'styled-components';

export const Menu = styled.div`
	background-color: #6371c7;
	position: fixed;
	display: flex;
	flex-direction: column;
	top: 0;
	bottom: 0;
	width: 15%;
	padding: 20px;
	text-align: center;
`;

export const MenuLogo = styled.nav`
	font-size: 26px;
	text-align: center;
	color: #fff;
	padding: 10px 0;
	font-weight: bold;
`;

export const MenuNav = styled.nav`
	padding: 10px 0;
	margin: 20px 0;
	border-top: 1px solid #fff5;
	border-bottom: 1px solid #fff5;
	text-align: left;
`;

export const Logout = styled.button`
	color: #fff9;
	cursor: pointer;
	background: none;
	border: 2px solid #fff9;
	border-radius: 5px;
	font-weight: bold;
	padding: 5px;
	margin: auto 0 1em;

	:hover {
		background: #fff1;
	}
`;
