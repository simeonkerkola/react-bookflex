import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Gallery from './HotelPage/Gallery';
import Overview from './HotelPage/Overview';
import HotelDetail from './HotelPage/HotelDetail';
import CallToAction from './HotelPage/CallToAction';

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Sidebar />
          <main className="hotel-page">
            <Gallery />
            <Overview />
            <HotelDetail />
            <CallToAction />
          </main>
        </div>
      </div>
    );
  }
}

export default LandingPage;
