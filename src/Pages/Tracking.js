import React from 'react';
import './Tracking.css';

const Tracking= () => {
  return (
    <div className="tracking-no-page">
      <h2 className="tracking-no-page__title">Enter Your Tracking No.</h2>
      <label className="tracking-no-page__label" htmlFor="tracking-no-input">Tracking No.</label>
      <input className="tracking-no-page__input" type="text" id="tracking-no-input" name="trackingNo" />
        <button className="tracking-no-page__button">Track</button>
    </div>
  );
};

export default Tracking;
