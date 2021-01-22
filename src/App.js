import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="./Home">Home</Link>
        <Link to="./About">About</Link>
        <Link to="./Users">Users</Link>
      </BrowserRouter>
    );
  }
}

export default App;