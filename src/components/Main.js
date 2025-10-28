import React from "react";
import Card from "./Card";
import greekSalad from "../assets/greek salad.jpg";
import lemonDessert from "../assets/lemon dessert.jpg";
import bruchetta from "../assets/bruchetta.svg";
import heroImg from "../assets/restauranfood.jpg";
import Button from "./Button";
import TestimonialCard from "./TestimonialCard";
import aboutImg1 from "../assets/aboutImg1.jpg"
import aboutImg2 from "../assets/aboutImg2.jpg"

const Main = () => {
  return (
    <div className="container">
      {/* ==================== HERO ==================== */}
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-left">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family-owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Button
              variant="primary"
              size="lg"
              // onClick={handleReserveClick}
              className="text-lg font-bold tracking-wide"
              id="hero-reserve-button"
              data-testid="hero-reserve-button"
              aria-label="Reserve a table at Little Lemon"
            >
              Reserve a Table
            </Button>
          </div>

          <div className="hero-right">
            <img
              src={heroImg}
              alt="Delicious restaurant dish"
              className="hero-image"
            />
          </div>
        </div>
      </section>
      {/* ==================== SPECIALS ==================== */}
      <section className="specials">
        <div className="specials-header">
          <h1>Specials</h1>
          <Button variant="secondary" size="md">
            Order Online
          </Button>
        </div>

        <div className="card-container">
          <Card
            title="Greek Salad"
            price="$12.99"
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            deliveryLink="#"
            image={greekSalad}
          />
          <Card
            title="Bruchetta"
            price="$15.99"
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            deliveryLink="#"
            image={bruchetta}
          />
          <Card
            title="Lemon Dessert"
            price="$6.99"
            description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            deliveryLink="#"
            image={lemonDessert}
          />
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
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
      <section className="about-section">
        <div className="about-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            imperdiet risus pharetra ante luctuelit. Phasellus imperdiet risus
            pharetra ante luctu orem ipsum dolor sit amet, consectetur
            adipiscing elit. Phasellus imperdiet risus pharetra ante luctuelit.
            Phasellus imperdiet risus pharetra ante luctu
          </p>
        </div>
        <div className="about-img">
          <img src={aboutImg2} alt="About Little Lemon 1" />
          <img src={aboutImg1} alt="About Little Lemon 2"/>
        </div>
      </section>
    </div>
  );
};

export default Main;
