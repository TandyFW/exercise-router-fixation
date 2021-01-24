import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {username: 'joao', password: 1234},
    }
  }
  render() {
    const { user } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Users/:id"
            render={((props) => <Users {...props} greetingMessage="Good Morning" />)}>
          </Route>
          <Route
            path="/StrictAccess/:id?"
            render={ (props) => <StrictAccess {...props} user={ user } />} />
          <Route exact path="/About" component={ About }></Route>
          <Route exact path="/" component={ Home }></Route>
        </Switch>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Users/52">Users</Link>
        <Link to="/StrictAccess">Access</Link>
      </BrowserRouter>
    );
  }
}

export default App;