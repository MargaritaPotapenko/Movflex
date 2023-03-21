import React from 'react';
//import { Link } from 'react-router-dom';
import '../../dist/css/home-banner.css';

const HomeBanner = () => {
  return (
    <header className="page-header home-header">
      <div className="container">
        <div className="banner-content">
          <h4 className="sub-title">Movflx</h4>
          <h2 className="title">Unlimited {<span>Movie</span>} , TVs Shows, & More.</h2>
        </div>
      </div>
    </header>
  )
}

export default HomeBanner;