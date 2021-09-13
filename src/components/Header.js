import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <img style={{marginLeft:250}}
          src='https://image.pngaaa.com/626/1220626-middle.png'
          width='60'
          height='60'
          className='d-inline-block align-top'
          alt='React Bootstrap logo'
        />
        <Navbar.Brand style={{marginLeft:50}}>My Favorite Books</Navbar.Brand>
        <NavItem style={{marginLeft:700}}>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </NavItem>
        {this.props.user && (
          <NavItem >
            <Link className='nav-link' to='/profile'>
              Profile
            </Link>
          </NavItem>
        )}
        {this.props.user && (
           <LogoutButton logoutHandler={this.props.logoutHandler} />
        )}
        {!this.props.user && (
           <LoginButton loginHandler={this.props.loginHandler}/>
        )}
        
        {/* DONE: if the user is logged in, render a navigation link to profile page */}
        {/* DONE: if the user is logged in, render the `LogoutButton` */}
      </Navbar>
    );
  }
}

export default Header;
