import React from 'react';

function GuestPage({ flights, onLogin }) {
  return (
    <div>
      <h2>Available Flights (Guest View)</h2>
      <p>Please log in to book a ticket.</p>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Flight No.</th>
            <th>From</th>
            <th>To</th>
            <th>Departure</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(flight => (
            <tr key={flight.id}>
              <td>{flight.flightNo}</td>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.departure}</td>
              <td>₹{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default GuestPage;