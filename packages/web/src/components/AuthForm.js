import styled from 'styled-components';

export const Card = styled.div`
	align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
	height: 100%;
	justify-content: center;

	a {
		color: #6371c7;
	}
`;

export const Title = styled.h1`
	color: #6371c7;
	font-size: 34px;
	font-weight: bold;
`;

export const Form = styled.div`
	background-color: #fff;
	border-radius: 15px;
  display: flex;
  flex-direction: column;
	padding: 2em;
	margin: 2em 1em 1em;
	width: 400px;
`;

export const Button = styled.button`
  background: linear-gradient(to bottom, #6371c7, #5563c1);
	border: none;
  border-radius: 15px;
	cursor: pointer;
  padding: .9rem;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

export const Error = styled.div`
  background-color: red;
`;
