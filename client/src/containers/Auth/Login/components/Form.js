import React from 'react';
import { Link } from 'react-router-dom';

function Form() {
  return (
    <form className="space-y-5">
      <section className="space-y-3">
        <div>
          <label
            htmlFor="signin-email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            id="signin-email"
            required
            className="block w-full mt-1 transition duration-150 ease-in-out shadow-sm form-input sm:text-sm focus:shadow-outline-blue"
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="signin-password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Link
              to="/"
              className="text-sm font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500"
            >
              Forgot password?
            </Link>
          </div>
          <input
            type="password"
            id="signin-password"
            required
            className="block w-full mt-1 transition duration-150 ease-in-out shadow-sm form-input sm:text-sm focus:shadow-outline-blue"
          />
        </div>
      </section>
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="submit"
            className="block w-full px-3 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
          >
            Sign in
          </button>
        </span>
      </div>
    </form>
  );
}

export default Form;
