import axios from 'axios';
import { header } from 'utils/header';

export async function postTagApi({ projectId, name, colorId }) {
  const { data } = await axios.post(
    `/v1/projects/${projectId}/tags`,
    {
      tag: {
        name,
        color_id: colorId,
      },
    },
    header()
  );

  return data;
}
