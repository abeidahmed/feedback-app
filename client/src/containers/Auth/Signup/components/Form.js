import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { useCurrentUser } from 'store/currentUser';
import { signupApi } from 'api/signup';
import { Input, Checkbox } from 'components/Field';

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
        <Input
          id="signup-email"
          label="Email address"
          showLabel={false}
          appearance="gray"
          type="email"
          placeholder="Email address"
          error={error}
          errorType="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="signup-password"
          label="Password"
          showLabel={false}
          appearance="gray"
          type="password"
          placeholder="Password (min 6 char)"
          error={error}
          errorType="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </section>
      <div>
        <Checkbox
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        >
          I agree to the{' '}
          <Link to="/" className="underline">
            Terms and conditions
          </Link>
        </Checkbox>
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
