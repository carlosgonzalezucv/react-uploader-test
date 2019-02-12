import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/LoginComponent.js';
import Main from './Main/MainComponent.js';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }

    this.user = {};
  }
  onLoggedIn (isLoggedIn, user) {
    this.setState({ isLoggedIn });
    this.user = user;
  }
  render() {
    let {isLoggedIn} = this.state;
    return !isLoggedIn ? (
      <Login onUpdateStatus={this.onLoggedIn.bind(this)}/>
    ) : (
      <Main onUpdateStatus={this.onLoggedIn.bind(this)} user={this.user}/>
    );
  }
}

export default App;
