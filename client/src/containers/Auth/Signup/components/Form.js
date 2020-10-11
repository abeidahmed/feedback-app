import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { useCurrentUser } from 'store/currentUser';
import { signupApi } from 'api/signup';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState([]);

  const { setUser } = useCurrentUser();

  const [mutate, { isLoading }] = useMutation(signupApi, {
    onSuccess: ({ data }) => {
      setUser(data);
    },
    throwOnError: true,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setError([]);
    try {
      await mutate({
        email,
        password,
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto my-8 space-y-5"
    >
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </section>
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox focus:shadow-outline-blue"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <span className="ml-2 text-sm text-gray-600">
            I agree to the{' '}
            <Link to="/" className="underline">
              Terms and conditions
            </Link>
          </span>
        </label>
      </div>
      <button
        disabled={isLoading || !agreed}
        className="block w-full px-3 py-2 font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 rounded-md focus:outline-none focus:shadow-outline-blue hover:bg-blue-600"
      >
        Join Feeder
      </button>
    </form>
  );
}

export default Form;
