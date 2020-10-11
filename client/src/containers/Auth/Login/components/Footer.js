import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';

function Footer() {
  return (
    <>
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          By signing in you agree to our{' '}
          <Link to="/" className="font-medium underline hover:text-gray-500">
            terms and conditions
          </Link>
          .
        </p>
      </div>
      <div className="py-5">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div>
        <p className="text-gray-700">New to our platform?</p>
        <div className="mt-4">
          <Button to="/signup" className="w-full">
            Create an account
          </Button>
        </div>
      </div>
    </>
  );
}

export default Footer;
