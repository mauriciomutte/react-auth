import React from 'react';

import MenuItem from '../MenuItem';

import * as S from './style';
import { useAuth } from '../../context/auth';

export default () => {
	const [, setToken] = useAuth();

	function logout() {
		localStorage.clear();
		setToken(null);
	}

	return(
		<S.Menu>
			<S.MenuLogo>Company <span role="img" aria-label="Building Construction">🏗️</span></S.MenuLogo>
			<S.MenuNav>
				<ul>
					<MenuItem name="Home" link="/"/>
					<MenuItem name="Profile" link="/profile"/>
				</ul>
			</S.MenuNav>
			<S.Logout onClick={logout}>Logout</S.Logout>
		</S.Menu>
	);
}
