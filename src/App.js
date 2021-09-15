import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './components/Login';
import BestBooks from './components/BestBooks';
import Footer from './components/Footer';
import Profile from './components/Profile';
import { Row, Col, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      user: false,
    };
  }
  loginHandler = (user) => {
    this.setState({
      user: !this.state.user,
    });
  };

  logoutHandler = () => {
    this.setState({
      user: !this.state.user,
    });
  };

  formSubmit = () => {
    this.setState({
      submitted: !this.state.submitted,
    });
  };
  render() {
    const isAuth = this.props.auth0.isAuthenticated;
    return (
      <Container>
      <Router>
        <Row >
          <Col md={{ span: 8, offset: 2 }}>
            <Header
              loginHandler={this.loginHandler}
              logoutHandler={this.logoutHandler}
              user={this.state.user}
              onLogout={this.logoutHandler}
            />
          </Col>
        </Row>
        <Switch>
          <Route exact path='/'>
            <Row>
              <Col style={{ marginTop: 10 }} md={{ span: 5, offset: 2 }}>
               {isAuth ? <BestBooks /> : <Login/>}
              </Col>
            </Row>
          </Route>
          <Route exact path='/profile'>
            {isAuth && <Profile />}
          </Route>
        </Switch>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Footer />
          </Col>
        </Row>
      </Router>
      </Container>
    );
  }
}

export default withAuth0(App);
