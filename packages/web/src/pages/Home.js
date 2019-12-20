import React from 'react';

import Menu from '../components/Menu';
import Main from '../components/Main';
import Header from '../components/Header';

export default function Home() {
  return (
		<div>
			<Menu />
			<Main withMenu={true}>
				<Header
					pageTitle="Home"
					userImg="https://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/Ahri.png"
				/>
			</Main>
		</div>
  );
}
