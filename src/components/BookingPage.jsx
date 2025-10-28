import React from 'react';
import Button from './Button';

const BookingPage = () => {
  return (
    <div className="booking-page">
      <div className="booking-container">
        <h1>Reserve a Table</h1>
        <form className="booking-form">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>
            <select id="time" name="time" required>
              <option value="">Select a time</option>
              <option value="17:00">5:00 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="21:00">9:00 PM</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <input 
              type="number" 
              id="guests" 
              name="guests" 
              min="1" 
              max="10" 
              defaultValue="2"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" required>
              <option value="">Select an occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="engagement">Engagement</option>
              <option value="other">Other</option>
            </select>
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            size="lg"
          >
            Make Your Reservation
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;