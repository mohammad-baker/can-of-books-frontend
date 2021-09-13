import Button from 'react-bootstrap/Button';
import { Component } from 'react';

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.logoutHandler} href='#'>
          logout
        </Button>
      </div>
    );
  }
}

export default LogoutButton;
