import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home }></Route>
        <Route exact path="/About" component={ About }></Route>
        <Route path="/Users/:id"
          render={((props) => <Users {...props} greetingMessage="Good Morning" />)}>
        </Route>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Users/52">Users</Link>
      </BrowserRouter>
    );
  }
}

export default App;