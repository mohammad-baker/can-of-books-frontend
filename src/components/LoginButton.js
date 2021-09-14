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
    /* DONE: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
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
