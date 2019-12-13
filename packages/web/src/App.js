import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
		<BrowserRouter>
			<Route path="/login" component={Login} />
			<Route path="/signup" component={Signup} />
			<PrivateRoute exact path="/" component={Home} />
		</BrowserRouter>
  );
}

export default App;
