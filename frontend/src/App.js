import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Top from './Top.js';
import Main from './Main.js';
import LandingPage from './LandingPage.js';
import { CSSTransition } from 'react-transition-group';

class Side extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: 'data', showLanding: true};
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleLandingEnter = this.handleLandingEnter.bind(this);
    this.handleLandingExit = this.handleLandingExit.bind(this);
  }

  handlePageChange(page) {
    this.setState({
      currentPage: page
    });
  }

  handleLandingEnter() {
    console.log('enter');
    this.setState({
      showLanding: true
    });
  }

  handleLandingExit(page) {
    console.log('exit');
    this.setState({
      currentPage: page,
      showLanding: false
    });
  }

  render() {
    const currentPage = this.state.currentPage;
    const showLanding = this.state.showLanding;
    const style = {
      overflow: showLanding ? 'hidden' : 'auto'
    };

    return (
      <div style={style} id="container">
        <CSSTransition
          in={showLanding}
          timeout={1000}
          classNames="land"
          unmountOnExit>
          <LandingPage onExitLanding={this.handleLandingExit} />
        </CSSTransition>
        <div className="topbar">
          <Top onLandingClick={this.handleLandingEnter} onPageChange={this.handlePageChange} page={currentPage}/>
        </div>
        <div className="flex-container">
          <div className="content">
            <Main page={currentPage}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
