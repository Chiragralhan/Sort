import React from "react";

function Event({ title, date, description }) {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
      <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
        <div className="ps-4">
          <h3 className="text-uppercase mb-3">{title}</h3>
          <p>{date}</p>
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Event;

