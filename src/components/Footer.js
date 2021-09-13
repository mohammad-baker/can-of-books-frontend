import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand style={{marginLeft:640}}>Made By Jehad Abu Awwad & Mohammad Baker</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
