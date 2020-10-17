import axios from 'axios';
import { header } from 'utils/header';

export async function showPasswordResetterApi(key, { token }) {
  const { data } = await axios.get(`/v1/password_resets/${token}`, header());

  return data;
}
