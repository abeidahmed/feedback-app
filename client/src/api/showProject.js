import axios from 'axios';
import qs from 'query-string';
import { header } from 'utils/header';

export async function showProjectApi(key, { id, filter = '' }) {
  const url = qs.stringifyUrl(
    {
      url: `/v1/projects/${id}`,
      query: {
        filter,
      },
    },
    { skipEmptyString: true }
  );
  return await axios.get(url, header());
}
