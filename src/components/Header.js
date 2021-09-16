import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { withAuth0 } from '@auth0/auth0-react';
import { Row, Col, Container } from 'react-bootstrap';
class Header extends React.Component {
  render() {
    const isAuth = this.props.auth0.isAuthenticated;
    return (
      <div>
        <Container>
          <Row>
            <Navbar
              style={{ padding: 10, marginTop: '4%'}}
              sm='auto'
              collapseOnSelect
              expand='lg'
              bg="light" variant="light"
            >
              <Col md={{ span: 1, offset: 0 }} xs={{ span: 0, offset: 0 }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                  }}
                  src='https://image.pngaaa.com/626/1220626-middle.png'
                  rounded
                />
              </Col>
              <Col md={{ span: 2, offset: 0 }} style={{marginRight:-30}}xs={{ span: 0, offset: 0 }}>
                <Navbar.Brand>BooksCan</Navbar.Brand>
              </Col>
              <Col md={{ span: 2, offset: 0 }}  style={{marginRight:-30}} xs={{ span: 0, offset: 0 }}>
                <NavItem>
                  <Link className='nav-link' to='/'>
                    Home
                  </Link>
                </NavItem>
              </Col>
              <Col md={{ span: 1, offset: 0 }} style={{marginRight:-10}} xs={{ span: 0, offset: 0 }}>
                {isAuth && (
                  <NavItem>
                    <Link className='nav-link' to='/profile'>
                      Profile
                    </Link>
                  </NavItem>
                )}
              </Col>
              <Col md={{ span: 2, offset: 5 }} style={{marginRight:10}} xs={{ span: 0, offset: 0 }}>
                {isAuth ? <LogoutButton /> : <LoginButton />}
              </Col>
            </Navbar>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withAuth0(Header);
