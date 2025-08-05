import React from 'react';

const OfficeSpace = () => {
  const office = {
    name: "GreenHub Office",
    rent: 45000,
    address: "MG Road, Bengaluru",
    image: process.env.PUBLIC_URL + "/assets/workspace.png"  
  };

  const officeList = [
    { name: "Startup Bay", rent: 55000, address: "HSR Layout, Bengaluru" },
    { name: "TechNest", rent: 72000, address: "Whitefield, Bengaluru" },
    { name: "WorkVilla", rent: 63000, address: "Koramangala, Bengaluru" },
    { name: "BudgetSpace", rent: 39000, address: "BTM Layout, Bengaluru" }
  ];

  const rentStyle = (rent) => ({
    color: rent < 60000 ? "red" : "green"
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🏢 Office Space Rental Listings</h1>

      
      <img src={office.image} alt="Office" width="300" height="200" />

      <h2>{office.name}</h2>
      <p><strong>Address:</strong> {office.address}</p>
      <p><strong>Rent:</strong> <span style={rentStyle(office.rent)}>₹{office.rent}</span></p>

      <hr />

      <h2>More Office Spaces</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong><br />
            Address: {item.address}<br />
            Rent: <span style={rentStyle(item.rent)}>₹{item.rent}</span>
            <br /><br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfficeSpace;
