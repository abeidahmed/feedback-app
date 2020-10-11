import axios from 'axios';

export async function signupApi({ email, password }) {
  return await axios.post(
    '/v1/users',
    {
      user: {
        email,
        password,
      },
    },
    { withCredentials: true }
  );
}
