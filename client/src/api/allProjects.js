import axios from 'axios';
import { header } from 'utils/header';

export async function allProjectsApi(key) {
  return await axios.get('/v1/projects', header());
}
