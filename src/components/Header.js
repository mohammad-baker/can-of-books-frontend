import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar sm='auto' collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Col xs={2} md={10}>
            <Image
              style={{
                width: 50,
                height: 50,
                marginRight: 10,
                marginLeft: 10,
              }}
              src='https://image.pngaaa.com/626/1220626-middle.png'
              rounded
            />
            <Navbar.Brand>Books Can</Navbar.Brand>
          </Col>

          <NavItem>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </NavItem>

          {this.props.user && (
            <NavItem>
              <Link className='nav-link' to='/profile'>
                Profile
              </Link>
            </NavItem>
          )}
          <Col xs={0} md={10} style={{ marginRight: 50 }}>
            {!this.props.user && (
              <LoginButton loginHandler={this.props.loginHandler} />
            )}
            {this.props.user && (
              <LogoutButton logoutHandler={this.props.logoutHandler} />
            )}
          </Col>
        </Navbar>
      </div>
    );
  }
}

export default Header;
