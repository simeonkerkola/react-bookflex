import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Sidebar />
          <main className="hotel-view">hotel view</main>
        </div>
      </div>
    );
  }
}

export default LandingPage;
