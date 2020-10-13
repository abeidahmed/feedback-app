import axios from 'axios';
import { header } from 'utils/header';

export async function patchProjectApi({ id, name }) {
  const { data } = await axios.patch(
    `/v1/projects/${id}`,
    {
      project: {
        name,
      },
    },
    header()
  );

  return data;
}
