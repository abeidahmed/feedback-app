import axios from 'axios';
import qs from 'query-string';
import { header } from 'utils/header';

export async function allFeedbacksApi(key, { projectId, filter = '' }) {
  const url = qs.stringifyUrl(
    {
      url: `/v1/projects/${projectId}/feedbacks`,
      query: {
        filter,
      },
    },
    { skipEmptyString: true }
  );
  return await axios.get(url, header());
}
