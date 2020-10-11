import React from 'react';
import { Link } from 'react-router-dom';

function Form() {
  return (
    <form className="w-full max-w-sm mx-auto my-8 space-y-5">
      <section className="w-full space-y-3">
        <div>
          <label htmlFor="signup-email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="signup-email"
            className="block w-full transition duration-150 ease-in-out bg-gray-100 sm:text-sm form-input focus:shadow-outline-blue focus:bg-white"
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="signup-password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="signup-password"
            className="block w-full transition duration-150 ease-in-out bg-gray-100 sm:text-sm form-input focus:shadow-outline-blue focus:bg-white"
            placeholder="Password"
          />
        </div>
      </section>
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox focus:shadow-outline-blue"
          />
          <span className="ml-2 text-sm text-gray-600">
            I agree to the{' '}
            <Link to="/" className="underline">
              Terms and conditions
            </Link>
          </span>
        </label>
      </div>
      <button className="block w-full px-3 py-2 font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 rounded-md focus:outline-none focus:shadow-outline-blue hover:bg-blue-600">
        Join Feeder
      </button>
    </form>
  );
}

export default Form;
