import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
export class Header extends Component {
    render() {
        return (
            <div>
               <>
  <Navbar bg="dark" variant="light">
    <Container>
    <img
        src="https://image.pngaaa.com/626/1220626-middle.png"
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    <Navbar.Brand href="/home" >BOOKs</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/profile">profile</Nav.Link>
    </Nav>
    <LogoutButton /> : <LoginButton />
    </Container>
  </Navbar>
  <br />
  
</> 
            </div>
        )
    }
}

export default Header
