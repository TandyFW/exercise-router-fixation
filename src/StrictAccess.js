import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {
  render() {
    const { username, password } = this.props.user;
    if(username !== 'joao' || password !== 1234) {
      return <Redirect to="/" />
    }
    return (
      <div>
        
        <p>Welcome joao!</p>
      </div>
    );
  }
}

export default StrictAccess;