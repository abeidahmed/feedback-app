import axios from 'axios';
import { header } from 'utils/header';

export async function postPasswordReset({ email }) {
  const { data } = await axios.post(
    '/v1/password_resets',
    {
      user: { email },
    },
    header()
  );

  return data;
}
