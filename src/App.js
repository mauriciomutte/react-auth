import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from './pages/Home';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
      </div>
    </Router>
  );
}

export default App;
