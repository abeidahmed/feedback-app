import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <p className="text-sm text-center text-gray-600">
      Already a member?{' '}
      <Link to="/login" className="font-medium text-blue-500 hover:underline">
        Sign in
      </Link>
    </p>
  );
}

export default Footer;
