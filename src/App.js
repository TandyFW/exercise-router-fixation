import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/Home" component={ Home }></Route>
        <Link to="./Home">Home</Link>
        <Link to="./About">About</Link>
        <Link to="./Users">Users</Link>
      </BrowserRouter>
    );
  }
}

export default App;