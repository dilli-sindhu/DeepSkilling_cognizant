import React, { useState } from 'react';
import GuestPage from './Components/GuestPage';
import UserPage from './Components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const flights = [
    { id: 1, flightNo: 'AI-101', from: 'Delhi', to: 'Mumbai', departure: '08:00 AM', price: 4500 },
    { id: 2, flightNo: '6E-202', from: 'Bengaluru', to: 'Hyderabad', departure: '11:30 AM', price: 3200 },
    { id: 3, flightNo: 'SG-303', from: 'Chennai', to: 'Kolkata', departure: '02:15 PM', price: 5100 },
    { id: 4, flightNo: 'UK-404', from: 'Pune', to: 'Jaipur', departure: '06:45 PM', price: 3900 }
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1>Flight Ticket Booking Application</h1>
      {isLoggedIn ? (
        <UserPage flights={flights} onLogout={handleLogout} />
      ) : (
        <GuestPage flights={flights} onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;