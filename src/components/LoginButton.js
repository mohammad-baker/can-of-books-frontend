import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
export class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginClicked: false,
    };
  }
  render() {
    return (
      <div>
        <Button href='#' onClick={this.props.loginHandler}>
          Log In
        </Button>
      </div>
    );
  }
}

export default LoginButton;
