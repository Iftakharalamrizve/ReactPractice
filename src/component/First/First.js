import React, { Component } from 'react';

class First extends Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.name} Your email is {this.props.email} Your phone number is {this.props.phone}</h2>
      </div>
    );
  }
}

export default First;
