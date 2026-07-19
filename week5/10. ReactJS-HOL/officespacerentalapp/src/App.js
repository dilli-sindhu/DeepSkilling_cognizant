import React from 'react';

function App() {
  // Step 2: JSX element for the heading
  const heading = <h1>Office Space Rental Listings</h1>;

  // Step 3: JSX attribute to display an image
  const officeImage = (
    <img
      src="https://via.placeholder.com/300x200.png?text=Office+Space"
      alt="Office Space"
      width="300"
    />
  );

  // Step 4: Object to display details of a single office
  const office = {
    name: 'Skyline Business Center',
    rent: 55000,
    address: 'MG Road, Bengaluru'
  };

  // Step 5: List of office objects
  const officeList = [
    { id: 1, name: 'Skyline Business Center', rent: 55000, address: 'MG Road, Bengaluru' },
    { id: 2, name: 'Tech Park Towers', rent: 72000, address: 'Hitech City, Hyderabad' },
    { id: 3, name: 'Green Valley Offices', rent: 48000, address: 'Baner, Pune' },
    { id: 4, name: 'Metro Corporate Hub', rent: 85000, address: 'Andheri, Mumbai' },
    { id: 5, name: 'Riverside Workspaces', rent: 39000, address: 'DLF Phase 3, Gurugram' }
  ];

  return (
    <div className="App">
      {heading}
      {officeImage}

      <h2>Featured Office</h2>
      <div>
        <h3>{office.name}</h3>
        <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
          Rent: ₹{office.rent}
        </p>
        <p>Address: {office.address}</p>
      </div>

      <h2>All Available Office Spaces</h2>
      {officeList.map(item => (
        <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{item.name}</h3>
          <p style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
            Rent: ₹{item.rent}
          </p>
          <p>Address: {item.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;