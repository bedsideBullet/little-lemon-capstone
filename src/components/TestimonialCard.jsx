import React from "react";
import avatar from "../assets/avatar.png"

const TestimonialCard = ({ rating, image, name, location, text }) => {
  return (
    <div className="testimonial-card">
      <h3 className="testimonial-rating">{rating}</h3>

      <div className="testimonial-body">
        <div className="testimonial-avatar">
            <img src={avatar} alt={`${name}'s avatar`} loading="lazy" />
        </div>

        <div className="testimonial-info">
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-location">{location}</p>
        </div>
      </div>

      <p className="testimonial-text">{text}</p>
    </div>
  );
};

export default TestimonialCard;
