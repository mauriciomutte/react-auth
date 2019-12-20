import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../style/GlobalStyles';

const Main = styled.main`
	margin: 0;
	margin-left: ${props => props.withMenu ? '17.9%' : '0'};
`;

export default (props) => {
	return (
		<Main {...props}>
    	<GlobalStyles />
			{props.children}
		</Main>
	);
}
