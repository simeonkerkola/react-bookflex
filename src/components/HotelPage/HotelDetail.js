import React from 'react';
import HotelReviews from './HotelReviews';

const HotelDetail = () => (
  <div className="detail">
    <div className="description">
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quos eligendi, fugiat
        placeat provident cumque deleniti itaque fugit, dignissimos quam obcaecati, beatae optio
        asperiores odio mollitia tempora repudiandae. Incidunt, ea.
      </p>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate distinctio, dicta itaque
        expedita quisquam cumque. Quidem ab quas rerum architecto deserunt? Iste perspiciatis
        commodi sint maxime nemo laudantium soluta earum.
      </p>
      <ul className="list">
        <li className="list__item">Close to the beach</li>
        <li className="list__item">Breakfast included</li>
        <li className="list__item">Free airport shuttle</li>
        <li className="list__item">Free Wifi in all rooms</li>
        <li className="list__item">Air conditioning and heating</li>
        <li className="list__item">Pets allowed</li>
        <li className="list__item">Perfect for families</li>
        <li className="list__item">We speak all languages</li>
      </ul>
      <div className="recommend">
        <p className="recommend__count">Lucy and 3 frieds recommend this hotel.</p>
        <div className="recommend__friends">
          <img src="/img/user-3.jpg" alt="Friend 1" className="recommend__photo" />
          <img src="/img/user-4.jpg" alt="Friend 2" className="recommend__photo" />
          <img src="/img/user-5.jpg" alt="Friend 3" className="recommend__photo" />
          <img src="/img/user-6.jpg" alt="Friend 4" className="recommend__photo" />
        </div>
      </div>
    </div>
    <HotelReviews />
  </div>
);

export default HotelDetail;
