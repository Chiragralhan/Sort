import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import './Styles/Carousel.css';

function Carousel() {
  return (
    <section id="hero">
      <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* First Carousel Item */}
            <div className="carousel-item active">
              <img className="w-100 carousel-image" src="Images/bg-1.webp" alt="" />
              <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                <div className="mx-sm-5 px-5" style={{ maxWidth: '900px' }}>
                  <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">
                    SORT AND LITERARY CLUB
                  </h1>
                  <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                    <i className="fa fa-map-marker-alt text-primary me-3"></i>TCET, Mumbai: 400101
                  </h4>
                  <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                    <i className="fa fa-phone-alt text-primary me-3"></i>+91 70454 49325
                  </h4>
                </div>
              </div>
            </div>
            {/* Second Carousel Item */}
            <div className="carousel-item">
              <img className="w-100 carousel-image" src="Images/bg2.webp" alt="" />
              <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                <div className="mx-sm-5 px-5" style={{ maxWidth: '900px' }}>
                  <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">
                    WE WILL KEEP YOU AN AWESOME
                  </h1>
                  <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                    <i className="fa fa-map-marker-alt text-primary me-3"></i>TCET, Mumbai: 400101
                  </h4>
                  <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                    <i className="fa fa-phone-alt text-primary me-3"></i>+91 70454 49325
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Carousel;

