import React from 'react';
import { Link } from 'react-router-dom';
import Overview from './Overview';
import HotelDetail from './HotelDetail';

const HotelView = () => (
  <div className="hotel-view">
    <div className="gallery">
      <figure className="gallery__item">
        <img src="/img/hotel-1.jpg" alt="Hotel 1" className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src="/img/hotel-2.jpg" alt="Hotel 2" className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src="/img/hotel-3.jpg" alt="Hotel 3" className="gallery__photo" />
      </figure>
    </div>
    <Overview />
    <HotelDetail />
  </div>
);

export default HotelView;
