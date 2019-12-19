import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../style/GlobalStyles';

const Main = styled.div`
	margin: 0;
	margin-left: 18%;
`;

export default ({children}) => {
	return (
		<Main>
    	<GlobalStyles />
			{children}
		</Main>
	);
}
