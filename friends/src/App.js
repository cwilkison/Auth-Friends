import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/ProtectedRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/protected">Protected Page</Link>
        </nav>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
