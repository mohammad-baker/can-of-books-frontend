import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          style={{ marginTop: 10 }}
          collapseOnSelect
          expand='lg'
          bg="light" variant="light"
        >
          <Navbar.Brand style={{ marginLeft: 'auto', marginRight: 'auto', }}>
            Jehad Abu Awwad & Mohammad Baker
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
