import React, { Component } from 'react';
import Main from './Components/Main';
import './static/styles.css';
import { BrowserRouter as Router } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
