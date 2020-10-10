import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>hello from LandingPage</h1>
      <Link to="/login">login</Link>
      <Link to="/signup">signup</Link>
      <Link to="/app">app</Link>
    </div>
  );
}

export default LandingPage;
