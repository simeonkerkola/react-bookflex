import React from 'react';

const CallToAction = () => (
  <div className="cta">
    <h2 className="cta__book-now">Good news! We have 4 free rooms for your selected dates</h2>
    <button className="btn btn-roller">
      <span className="btn-roller__visible">Book now!</span>
      <span className="btn-roller__invisible">Only 4 rooms left!</span>
    </button>
  </div>
);

export default CallToAction;
