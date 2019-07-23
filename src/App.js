import React from 'react';
import Login from './pages/Login';
import Feed from './pages/Feed'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/feed" exact component={Feed} />
    </Router>
  );
}

export default App;
