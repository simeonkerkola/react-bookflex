import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import HotelView from './HotelView';

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Sidebar />
          <main>
            <HotelView />
          </main>
        </div>
      </div>
    );
  }
}

export default LandingPage;
