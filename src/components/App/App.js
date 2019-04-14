import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Account from './../Account/Accouts';
import Index from './../Index/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ul style={ {display: 'flex'} }>
            <li style={ {flex: 1, listStyleType: 'none'} }><Link to="/account">React 账务管理系统</Link></li>
            <li style={ {flex: 1, listStyleType: 'none'} }><Link to="/index">基本页面_玩转路由</Link></li>
          </ul>
          <Route path="/account" component={ Account } />
          <Route path="/index" component={ Index } />
        </Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
