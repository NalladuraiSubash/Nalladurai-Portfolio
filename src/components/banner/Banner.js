import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import './Banner.css';

const Banner = () => {
  return (
    <section
      id="home"
      className="banner-container"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
}

export default Banner;
