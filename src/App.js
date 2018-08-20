import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Visalist from './components/visa/Visalist';
import Create from './components/create/Create';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        {/* <p className="App-intro"> */}
        {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        {/* <Login /> */}
        {/* </p> */}

        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/list' component={Visalist} />
          <Route path='/create' component={Create} />
        </Switch>
      </div>
    );
  }
}

export default App;
