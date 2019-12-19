import React from 'react';

import Menu from '../components/Menu';
import Main from '../components/Main';
import Header from '../components/Header';

export default function Profile() {
  return (
		<div>
			<Menu />
			<Main>
				<Header
					pageTitle="Profile"
					userName="Ahri"
					userImg="https://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/Ahri.png"
				/>
			</Main>
		</div>
  );
}
