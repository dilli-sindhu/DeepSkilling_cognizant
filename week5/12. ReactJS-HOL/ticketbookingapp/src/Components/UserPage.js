import React, { useState } from 'react';

function UserPage({ flights, onLogout }) {
  const [bookedFlight, setBookedFlight] = useState(null);

  const handleBook = (flight) => {
    setBookedFlight(flight);
    alert(`Ticket booked successfully for flight ${flight.flightNo} (${flight.from} → ${flight.to})`);
  };

  return (
    <div>
      <h2>Available Flights (Logged-In User View)</h2>
      <p>Welcome! You can now book tickets.</p>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Flight No.</th>
            <th>From</th>
            <th>To</th>
            <th>Departure</th>
            <th>Price</th>
            <th>Action</th>
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
              <td>
                <button onClick={() => handleBook(flight)}>Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {bookedFlight && (
        <p>
          <strong>Last Booked:</strong> Flight {bookedFlight.flightNo} from {bookedFlight.from} to {bookedFlight.to}
        </p>
      )}

      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserPage;