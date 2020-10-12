import axios from 'axios';
import { header } from 'utils/header';

export async function getCurrentUserApi() {
  const { data } = await axios.get('/v1/sessions/current_user', header());

  return data;
}
