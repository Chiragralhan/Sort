import React from "react";
import "./Styles/Footer.css";

function Footer() {
  return (
    <section id="footer">
      <div
        className="container-fluid bg-secondary text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            {/* Get In Touch Section */}
            <div className="col-lg-4 col-md-6">
              <h4 className="text-uppercase mb-4">Get In Touch</h4>
              <div className="d-flex align-items-center mb-2">
                <div className="btn-square bg-dark flex-shrink-0 me-3">
                  <span className="fa fa-map-marker-alt text-primary"></span>
                </div>
                <span>
                  A-Block, Thakur Educational Campus, Shyamnarayan Thakur Marg,
                  Thakur Village, Kandivali East, Mumbai, Maharashtra - 400101
                </span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="btn-square bg-dark flex-shrink-0 me-3">
                  <span className="fa fa-phone-alt text-primary"></span>
                </div>
                <span>+91 70454 49325</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="btn-square bg-dark flex-shrink-0 me-3">
                  <span className="fa fa-envelope-open text-primary"></span>
                </div>
                <span>tcet.sort@gmail.com</span>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="col-lg-4 col-md-6">
              <h4 className="text-uppercase mb-4">Quick Links</h4>
              <a className="btn btn-link" href="index.html">
                Home
              </a>
              <a className="btn btn-link" href="about.html">
                About Us
              </a>
              <a className="btn btn-link" href="magazine.html">
                Magazine
              </a>
              <a className="btn btn-link" href="event.html">
                Our Events
              </a>
            </div>

            {/* Newsletter Section */}
            <div className="col-lg-4 col-md-6">
              <h4 className="text-uppercase mb-4">Newsletter</h4>
              <div className="input-container position-relative mb-4">
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="email"
                  placeholder="Your email"
                  required
                />
                <label
                  htmlFor="showModal"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </label>
              </div>
              <input type="checkbox" id="showModal" />
              <div id="thankYouModal">
                <div className="modal-content">
                  <h2>Thank you!</h2>
                  <p>Thank you for signing up with SORT!</p>
                  <label htmlFor="showModal" className="btn btn-primary">
                    Close
                  </label>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="d-flex pt-1 m-n1">
                <a
                  className="btn btn-lg-square btn-dark text-primary m-1"
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/tcetmumbai?lang=en"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-lg-square btn-dark text-primary m-1"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/tcetmumbaiofficial/"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-lg-square btn-dark text-primary m-1"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/sort_tcet/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-lg-square btn-dark text-primary m-1"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/sort-tcet/?originalSubdomain=in"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="index.html">
                  Sort and Literary Club
                </a>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                Developed By{" "}
                <a className="border-bottom" href="https://adarshh.me/">
                  Adarsh Kesharwani
                </a>{" "}
                <a> & </a>
                <a
                  className="border-bottom"
                  href="https://www.linkedin.com/in/vignesh-alle-b95411236"
                >
                  Vignesh Alle
                </a>
                <br />
                Designed By{" "}
                <a
                  className="border-bottom"
                  href="https://www.linkedin.com/in/aadarsh-pandey-211336292"
                >
                  Aadarsh Pandey
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

