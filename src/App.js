import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import BestBooks from './components/BestBooks';
import Footer from './components/Footer';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowDetails: false,
    };
  }
  render() {
    return (
      <div>
        <Container>
          <Row style={{ marginTop: 5 }} xs={1} md={1} className='g-4'>
            <Header />
            
          </Row>
        </Container>

        <Container>
          <Row  xs={1} md={2}>
            <BestBooks />
            <LoginForm />
          </Row>
        </Container>

        <Container>
          <Row style={{ marginTop: 5 }} xs={1} md={1} className='g-4'>
            <Footer />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
