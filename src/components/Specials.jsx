import React from "react";
import Card from "./Card";
import Button from "./Button";
import greekSalad from "../assets/greek salad.jpg";
import lemonDessert from "../assets/lemon dessert.jpg";
import bruchetta from "../assets/bruchetta.svg";

const Specials = () => {
  return (
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
  );
};

export default Specials;