import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="overview">
      <h1 className="overview__heading">Holiday Cambodia</h1>

      <div className="overview__stars">
        <svg className="overview__icon-star">
          <use xlinkHref="/img/sprite.svg#icon-star" />
        </svg>
        <svg className="overview__icon-star">
          <use xlinkHref="/img/sprite.svg#icon-star" />
        </svg>
        <svg className="overview__icon-star">
          <use xlinkHref="/img/sprite.svg#icon-star" />
        </svg>
        <svg className="overview__icon-star">
          <use xlinkHref="/img/sprite.svg#icon-star" />
        </svg>
        <svg className="overview__icon-star">
          <use xlinkHref="/img/sprite.svg#icon-star" />
        </svg>
      </div>

      <div className="overview__location">
        <svg className="overview__icon-location-pin">
          <use xlinkHref="/img/sprite.svg#icon-location-pin" />
        </svg>
        <button className="btn btn-inline">Phnom Penh, Cambodia</button>
      </div>

      <div className="overview__rating">
        <div className="overview__rating-average">8.6</div>
        <div className="overview__rating-count">429 votes</div>
      </div>
    </div>
  </div>
);

export default HotelView;
