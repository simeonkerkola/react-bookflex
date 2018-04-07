import React from 'react';
import { Link } from 'react-router-dom';

const HotelReviews = () => (
  <div className="hotel-reviews">
    <figure className="review">
      <blockquote className="review__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque harum et nemo amet,
        dolores veniam voluptatum, quia facere asperiores hic quis esse maxime temporibus eaque
        corporis. Ratione, veritatis vitae perferendis.
      </blockquote>
      <figcaption className="review__user">
        <img src="/img/user-1.jpg" alt="User 1" className="review__photo" />
        <div className="review__user-box">
          <p className="review__user-name">John Doe</p>
          <p className="review__user-date">Apr 6, 2018</p>
        </div>
        <div className="review__rating">8</div>
      </figcaption>
    </figure>

    <figure className="review">
      <blockquote className="review__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio earum repellat nesciunt
        magnam voluptatem asperiores vel deleniti, a corporis, laboriosam voluptate? Neque magnam,
        praesentium eos, nam odit hic! Esse, veritatis?
      </blockquote>
      <figcaption className="review__user">
        <img src="/img/user-2.jpg" alt="User 2" className="review__photo" />
        <div className="review__user-box">
          <p className="review__user-name">Jane Roe</p>
          <p className="review__user-date">Mar 12, 2018</p>
        </div>
        <div className="review__rating">9</div>
      </figcaption>
    </figure>

    <Link to="#0" className="btn btn-inline">
      Show all <span className="btn-inline__arrow">&rarr;</span>
    </Link>
  </div>
);

export default HotelReviews;
