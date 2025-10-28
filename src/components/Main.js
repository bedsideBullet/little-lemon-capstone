import React from 'react';
import Card from './Card';
import greekSalad from '../assets/greek salad.jpg'
import lemonDessert from "../assets/lemon dessert.jpg"
import bruchetta from "../assets/bruchetta.svg"

const Main = () => {
  return (
    <div className="container">
      <section className='hero'>
        <h1>Little Lemon</h1>
        <h3>Chicaho</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at iaculis dui. Praesent elementum sit amet nulla ac venenatis. Morbi venenatis congue sapien sollicitudin commodo.</p>
      </section>
      <section className="specials">
        <Card 
          title="Greek Salad" 
          price="$12.99" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet risus pharetra ante luctus" 
          deliveryLink="#"
          image={greekSalad}
        />
        <Card 
          title="Bruchetta" 
          price="$15.99" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet risus pharetra ante luctus" 
          deliveryLink="#"
          image={bruchetta}
        />
        <Card 
          title="Lemon Dessert" 
          price="$6.99" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet risus pharetra ante luctus" 
          deliveryLink="#"
          image={lemonDessert}
        />
      </section>

      <section className="testimonials">
        <Card 
          title="Little Lemon" 
          description="Chicago" 
          deliveryLink="#"
        />
      </section>
    </div>
  );
};

export default Main;