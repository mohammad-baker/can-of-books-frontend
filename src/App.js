import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import BestBooks from './components/BestBooks';
import Footer from './components/Footer';
import Profile from './components/Profile';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
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
    return (
      <Router>
        <Header
          loginHandler={this.loginHandler}
          logoutHandler={this.logoutHandler}
          user={this.state.user}
          onLogout={this.logoutHandler}
        />
        <Switch>
          <Route exact path='/'>
            <Row>
              <Col xs={{ order: 1 }} md={{ span: 4, offset: 0 }}>
                <LoginForm
                  loginHandler={this.loginHandler}
                  formSubmit={this.formSubmit}
                  submitted={this.state.submitted}
                  user={this.state.user}
                />
              </Col>
              <Col sm='auto' md={{ span: 6, offset: 2 }}>
                {<BestBooks />}
              </Col>
            </Row>
          </Route>

          <Route exact path='/profile'>
            <Profile />
          </Route>
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App;
