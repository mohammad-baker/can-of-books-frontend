import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { withAuth0 } from '@auth0/auth0-react';
class Header extends React.Component {
  render() {
    const isAuth = this.props.auth0.isAuthenticated;
    return (
      <div>
        <Navbar
          style={{ padding: 10, marginTop: '4%' }}
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
              marginRight: 2,
              marginLeft: 2,
            }}
            src='https://image.pngaaa.com/626/1220626-middle.png'
            rounded
          />
          <Navbar.Brand
            style={{
              margin: 'auto',
            }}
          >
            Books Can
          </Navbar.Brand>

          <NavItem>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </NavItem>

          {isAuth && (
            <NavItem>
              <Link
                style={{
                  marginLeft: -10,
                }}
                className='nav-link'
                to='/profile'
              >
                My Profile
              </Link>
            </NavItem>
          )}

          {isAuth ? <LogoutButton /> : <LoginButton />}
        </Navbar>
      </div>
    );
  }
}

export default withAuth0(Header);
