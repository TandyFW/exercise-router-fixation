import React from 'react';

class Users extends React.Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <div>
        <h2> Users </h2>
        <p> { this.props.greetingMessage }, this is my awesome Users component </p>
        <p>ID: { id }</p>
      </div>
    );
  }
}

export default Users;