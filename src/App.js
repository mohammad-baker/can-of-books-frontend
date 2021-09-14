import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import BestBooks from './components/BestBooks';
import Footer from './components/Footer';
import Profile from './components/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
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
          <Row style={{ marginTop: 5 }} xs={1} md={1} className='g-4'>
            <Switch>
              {/* DONE: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              <Route exact path='/'>
                <LoginForm
                  loginHandler={this.loginHandler}
                  formSubmit={this.formSubmit}
                  submitted={this.state.submitted}
                  user={this.state.user}
                />
                {<BestBooks />}
              </Route>

              {/* DONE: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path='/profile'>
                <Profile />
              </Route>
            </Switch>
          </Row>
          <Footer />
        </Router>
      
    );
  }
}

export default App;
