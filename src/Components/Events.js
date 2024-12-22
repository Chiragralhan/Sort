import React from "react";
import Event from "./Event";

const eventData = [
  {
    title: "SORT Cricket League",
    date: "15th September",
    description: [
      "Showcase your cricket skills and stand a chance to be the SCL Champion",
      "Bond with friends, experience the thrill, and win exciting prizes"
    ]
  },
  {
    title: "Rang-E-Alfaaz",
    date: "TBA",
    description: [
      "Celebrate the art of poetry with over 25+ passionate participants",
      "Feel the energy as top performers recite their way to glory!"
    ]
  },
  {
    title: "Technical Event",
    date: "TBA",
    description: [
      "Engage in a series of technical tasks and prove your mettle",
      "Learn, innovate, and connect with like-minded tech enthusiasts"
    ]
  }
];

function Events() {
  return (
    <section id="events">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
            <p className="d-inline-block bg-secondary text-primary py-1 px-4">EVENTS</p>
            <h1 className="text-uppercase">Upcoming Events</h1>
          </div>
          <div className="row g-4">
            {eventData.map((event, index) => (
              <Event key={index} title={event.title} date={event.date} description={event.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;

