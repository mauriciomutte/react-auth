import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	background-color: #fff;
	border-radius: 10px;
	flex-direction: column;
	max-width: 700px;
	margin: 3em auto 1em;
	padding: 2em 3em;
`;

export const Label = styled.label`
	color: #6371c7;
	font-weight: bold;
	font-size: 18px;
	margin-bottom: 5px;
`;

export const InputText = styled.input`
	margin-bottom: 2em;
	border: 2px solid #0003;
	padding: 10px;
	border-radius: 2px;
`;

export const Submit = styled.button`
	background: #6371c7;
	border: none;
	border-radius: 5px;
	color: #fff;
	font-size: 16px;
	font-weight: bold;
	margin-left: auto;
	padding: 7px 14px;
	width: 120px;
`;
