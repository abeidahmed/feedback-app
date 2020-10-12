import axios from 'axios';
import { useQuery } from 'react-query';
import qs from 'query-string';
import { header } from 'utils/header';
import * as q from 'global/queryKey';

async function allFeedbacksApi(key, { projectId, filter = '' }) {
  const url = qs.stringifyUrl(
    {
      url: `/v1/projects/${projectId}/feedbacks`,
      query: {
        filter,
      },
    },
    { skipEmptyString: true }
  );
  const { data } = await axios.get(url, header());

  return data;
}

export function useGetFeedbacks({ projectId, filter }) {
  const { data: { feedbacks } = ({} = {}), isLoading, isError } = useQuery(
    [q.GET_FEEDBACKS, { projectId, filter }],
    allFeedbacksApi
  );

  return { feedbacks, isLoading, isError };
}
