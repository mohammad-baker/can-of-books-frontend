import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          style={{ padding: 5, marginTop: '4%' }}
          sm='auto'
          collapseOnSelect
          expand='lg'
          bg='dark'
          variant='dark'
        >
          <Image
            style={{
              width: 50,
              height: 50,
              marginRight: 4,
              marginLeft: 3,
            }}
            src='https://image.pngaaa.com/626/1220626-middle.png'
            rounded
          />
          <Navbar.Brand>Books Can</Navbar.Brand>

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

          {!this.props.user && (
            <LoginButton loginHandler={this.props.loginHandler} />
          )}
          {this.props.user && (
            <LogoutButton logoutHandler={this.props.logoutHandler} />
          )}
        </Navbar>
      </div>
    );
  }
}

export default Header;
