// src/Components/Contact.js
import React from 'react';
import './Styles/Contact.css';


function Contact() {
  return (
    <section id="contact">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0">
            {/* Left section with form */}
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-secondary p-5">
                <p className="d-inline-block bg-dark text-primary py-1 px-4">Contact Us</p>
                <h1 className="text-uppercase mb-4">Have Any Query? Please Contact Us!</h1>

                {/* Contact form */}
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control bg-transparent" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control bg-transparent" placeholder="Leave a message here" id="message" style={{ height: '100px' }}></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Right section with Google Map */}
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="h-100" style={{ minHeight: '400px' }}>
                <iframe
                  className="google-map w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.745722943928!2d72.87241691492012!3d19.20630535285456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1677901063659!5m2!1sen!2sin"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  style={{ filter: 'grayscale(10%) invert(92%) contrast(83%)', border: '0' }}
                  title="Location of Thakur College of Engineering and Technology"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
