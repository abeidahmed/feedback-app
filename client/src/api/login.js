import axios from 'axios';

export async function loginApi({ email, password }) {
  return await axios.post(
    '/v1/sessions',
    {
      user: {
        email,
        password,
      },
    },
    { withCredentials: true }
  );
}
