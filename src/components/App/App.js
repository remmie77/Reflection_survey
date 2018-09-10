import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import AdminPage from '../AdminPage/AdminPage.js';
import CommentPage from '../CommentPage/CommentPage.js';
import FeelingPage from '../FeelingPage/FeelingPage.js';
import SuccessPage from '../SuccessPage/SuccessPage.js';
import SupportPage from '../SupportPage/SupportPage.js';
import UnderstandPage from '../UnderstandPage/UnderstandPage.js';
import Header from '../Header/Header.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <br /> */}
          <Route exact path="/" component={FeelingPage} />
          <Route path="/understand" component={UnderstandPage} />
          <Route path="/support" component={SupportPage} />
          <Route path="/comment" component={CommentPage} />
          <Route path="/success" component={SuccessPage} />
          <Route path="/admin" component={AdminPage} />
        </div>
      </Router>
    );
  }
}

export default App;
