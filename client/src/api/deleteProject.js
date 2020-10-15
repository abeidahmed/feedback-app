import axios from 'axios';
import { header } from 'utils/header';

export async function deleteProjectApi({ projectId }) {
  const { data } = await axios.delete(`/v1/projects/${projectId}`, header());

  return data;
}
