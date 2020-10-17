import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { loginApi } from 'api/login';
import { useCurrentUser } from 'store/currentUser';
import { Input } from 'components/Field';
import { Button } from 'components/Button';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setUser } = useCurrentUser();
  const history = useHistory();
  const [mutate, { isLoading }] = useMutation(loginApi, {
    onSuccess: ({ data }) => {
      setUser(data);
      setEmail('');
      setPassword('');
      setError('');
      history.push('/app');
    },
    throwOnError: true,
  });

  async function handleLogin(e) {
    e.preventDefault();
    setError('');
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
    <form onSubmit={handleLogin} className="space-y-5">
      <section className="space-y-3">
        <Input
          label="Email address"
          id="signin-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          id="signin-password"
          type="password"
          to={{
            pathname: '/password_reset',
            title: 'Forgot password?',
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-sm font-medium text-red-700">{error}</p>}
      </section>
      <div>
        <Button disabled={isLoading} color="primary" width="100%">
          Sign in
        </Button>
      </div>
    </form>
  );
}

export default Form;
