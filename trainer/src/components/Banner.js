/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Css/Banner.css';
import Logo from '../assets/Logo.png';

const Banner = () => {
  return (
    <div className="banner">
      <section className="banner-section sectionContainer">
        <div className="container" style={{ height: '75%' }}>
          <div className="row" style={{ height: '100%' }}>
            <div className="col-lg-12 text-center" >
              <div className="bs-text" style={{ height: '100%' }}>
                <h2 id="text">Entrenamiento Personalizado</h2>
                <div className="fa-logo">
                  <img src={Logo}
                    alt="Logo"
                    id="logo"
                  />
                </div>
                <a href="#prices"
                  className="primary-btn btn-normal homeButton"
                >Elegí tu Plan</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;