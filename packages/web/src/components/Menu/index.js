import React from 'react';

import * as S from './style';

import MenuItem from '../MenuItem';

export default () => {
	return(
		<S.Menu>
			<S.MenuLogo>Company <span role="img" aria-label="Building Construction">🏗️</span></S.MenuLogo>
			<S.MenuNav>
				<ul>
					<MenuItem name="Home" link="/"/>
					<MenuItem name="Profile" link="/profile"/>
				</ul>
			</S.MenuNav>
		</S.Menu>
	);
}
