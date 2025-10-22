import React from 'react';
import Card from './Card';

const Main = () => {
  return (
    <div className="container">
      <section className="specials">
        <Card 
          title="Greek Salad" 
          price="$12.99" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet risus pharetra ante luctus" 
          deliveryLink="#"
        />
        <Card 
          title="Bruchetta" 
          price="$15.99" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet risus pharetra ante luctus" 
          deliveryLink="#"
        />
        <Card 
          title="Lemon Dessert" 
          price="$6.99" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet risus pharetra ante luctus" 
          deliveryLink="#"
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