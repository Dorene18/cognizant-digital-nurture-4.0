import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Choose which component to render
  let displayPage;
  if (isLoggedIn) {
    displayPage = <UserPage />;
  } else {
    displayPage = <GuestPage />;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🎟️ Ticket Booking App</h1>
      
      {displayPage}

      <br />
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default LoginControl;
