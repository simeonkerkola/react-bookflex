import React from 'react';

const OverView = () => (
  <div className="overview">
    <h1 className="overview__heading">Holiday Inn Cambodia</h1>

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
);

export default OverView;
