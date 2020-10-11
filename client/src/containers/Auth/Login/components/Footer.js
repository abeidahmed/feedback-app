import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          By signing in you agree to our{' '}
          <Link
            to="/"
            className="font-medium underline transition duration-150 ease-in-out hover:text-gray-500"
          >
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
          <span className="rounded-md shadow-sm">
            <Link
              to="/signup"
              className="block w-full px-3 py-2 text-base font-medium leading-6 text-center text-gray-700 whitespace-no-wrap transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50"
            >
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
