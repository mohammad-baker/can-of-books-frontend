import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import BestBooks from './BestBooks';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
       <BestBooks/>

       <LoginForm/>
       <Footer/>
      </div>
    )
  }
}

export default App;
