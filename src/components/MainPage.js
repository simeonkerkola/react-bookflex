import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">Header</header>
        <div className="content">
          <nav className="sidebar">Navigation</nav>
          <main className="hotel-view">hotel view</main>
        </div>
      </div>
    );
  }
}

export default LandingPage;
