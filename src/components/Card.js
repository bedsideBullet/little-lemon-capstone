import React from 'react';

const Card = ({ image, title, price, description, deliveryLink }) => {
  return (
    <div className="card">
      <div className="card-image">
        {image ? (
          <img src={image} alt={title || 'card image'} loading="lazy" />
        ) : (
          <div className="image-placeholder" />
        )}
      </div>

      <div className="card-content">
        <header className="card-header-group">
            <h3>{title}</h3>
            <span className="card-price">{price}</span>
        </header>

        <p>{description}</p>
        <a href={deliveryLink} className="delivery-link">order for delivery</a>
      </div>
    </div>
  );
};

export default Card;