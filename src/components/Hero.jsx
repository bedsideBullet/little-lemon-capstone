import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import heroImg from "../assets/restauranfood.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-left">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations">
            <Button
              variant="primary"
              size="lg"
              className="text-lg font-bold tracking-wide"
              id="hero-reserve-button"
              data-testid="hero-reserve-button"
              aria-label="Reserve a table at Little Lemon"
            >
              Reserve a Table
            </Button>
          </Link>
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
  );
};

export default Hero;