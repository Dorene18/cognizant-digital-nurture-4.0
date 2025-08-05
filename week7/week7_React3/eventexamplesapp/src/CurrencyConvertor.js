import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = () => {
    const inr = parseFloat(rupees);
    if (!isNaN(inr)) {
      const euro = inr * 0.011; 
      setEuros(euro.toFixed(2));
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>💱 Currency Convertor (INR → EUR)</h2>
      <label>Enter amount in INR: </label>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      /> &nbsp;

      <button onClick={handleSubmit}>Convert</button>

      {euros && (
        <p>Converted amount in Euro: <strong>€{euros}</strong></p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
