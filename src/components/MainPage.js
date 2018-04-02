import React, { Component } from 'react';
import Header from './Header';

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <nav className="sidebar">Navigation</nav>
          <main className="hotel-view">hotel view</main>
        </div>
      </div>
    );
  }
}

export default LandingPage;
