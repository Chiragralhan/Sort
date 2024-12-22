import $ from 'jquery'; // Make sure jQuery is imported first
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { useEffect } from 'react';
import './Styles/Experience.css';

import OwlCarousel from 'react-owl-carousel'; // Import the React Owl Carousel component

function Experience() {
  useEffect(() => {
    // Ensure jQuery and OwlCarousel are loaded after the component mounts
    if ($.fn.owlCarousel) {
      $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
      });
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <section id="experience">
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '600px' }}
          >
            <p className="d-inline-block bg-secondary text-primary py-1 px-4">
              Experiences
            </p>
            <h1 className="text-uppercase">What Our Members Say!</h1>
          </div>
          <OwlCarousel
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
            items={1}
            loop
            autoplay
            margin={10}
            nav
            dots
          >
            <div
              className="testimonial-item text-center"
              data-dot={<img className="img-fluid" src="/Images/tahami.png" alt="Tahami Syed" />}
            >
              <h4 className="text-uppercase">Tahami Syed</h4>
              <p className="text-primary">TT AIDS B</p>
              <span className="fs-5">
                Being part of the S.O.R.T. Club has helped me develop both
                socially and professionally. The club is more than just a group,
                it's like a family.
              </span>
            </div>
            <div
              className="testimonial-item text-center"
              data-dot={<img className="img-fluid" src="/Images/jogendra.png" alt="Jogendra Suthar" />}
            >
              <h4 className="text-uppercase">Jogendra Suthar</h4>
              <p className="text-primary">TT AIDS B</p>
              <span className="fs-5">
                SORT CLUB gave me opportunities to participate in skill-building
                activities and webinars. It helped me improve my communication,
                technical skills, and confidence.
              </span>
            </div>
            <div
              className="testimonial-item text-center"
              data-dot={<img className="img-fluid" src="/Images/ayush.png" alt="Ayush Malviya" />}
            >
              <h4 className="text-uppercase">Ayush Malviya</h4>
              <p className="text-primary">TT CSE</p>
              <span className="fs-5">
                Through the club's workshops and mentorship programs, I learned
                valuable skills in leadership, personal branding, aiding my
                personal and professional growth.
              </span>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default Experience;






