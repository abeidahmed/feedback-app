import axios from 'axios';
import { header } from 'utils/header';

export async function postProjectApi({ name }) {
  const { data } = await axios.post(
    '/v1/projects',
    {
      project: {
        name,
      },
    },
    header()
  );

  return data;
}
