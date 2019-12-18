import styled from 'styled-components';

export const Card = styled.div`
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

	a {
		color: #6371c7;
	}
`;

export const Title = styled.h1`
	color: #6371c7;
	font-size: 3rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  padding: .8rem;
  border: 1px solid #999;
	border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 0.8rem;
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
