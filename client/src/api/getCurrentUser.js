import axios from 'axios';
import { header } from 'utils/header';

export async function getCurrentUserApi() {
  return await axios.get('/v1/sessions/current_user', header());
}
