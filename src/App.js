import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './context/auth';

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = data => {
    localStorage.setItem("auth-token", JSON.stringify(data.token));
    setAuthTokens(data.token);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute exact path="/" component={Home} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
