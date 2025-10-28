import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="testimonal-section">
      <h1>Testimonials</h1>
      <div className="testimonials">
        <TestimonialCard
          rating="5 Stars"
          name="Jane Doe"
          location="Chicago"
          text="Little Lemon never disappoints! The food is always fresh and delicious."
          image="https://via.placeholder.com/60"
        />
        <TestimonialCard
          rating="5 Stars"
          name="Jane Doe"
          location="Chicago"
          text="Little Lemon never disappoints! The food is always fresh and delicious."
          image="https://via.placeholder.com/60"
        />
        <TestimonialCard
          rating="5 Stars"
          name="Jane Doe"
          location="Chicago"
          text="Little Lemon never disappoints! The food is always fresh and delicious."
          image="https://via.placeholder.com/60"
        />
        <TestimonialCard
          rating="5 Stars"
          name="Jane Doe"
          location="Chicago"
          text="Little Lemon never disappoints! The food is always fresh and delicious."
          image="https://via.placeholder.com/60"
        />
      </div>
    </section>
  );
};

export default Testimonials;