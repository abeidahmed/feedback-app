import axios from 'axios';
import { header } from 'utils/header';

export async function showProjectApi(key, { id }) {
  return await axios.get(`/v1/projects/${id}`, header());
}
