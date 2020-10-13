import axios from 'axios';
import { useQuery } from 'react-query';
import { header } from 'utils/header';
import * as q from 'global/queryKey';

async function getTagsApi(key, { projectId }) {
  const { data } = await axios.get(`/v1/projects/${projectId}/tags`, header());

  return data;
}

export function useGetTags({ projectId }) {
  const { data: { tags } = {}, isLoading, isError, ...rest } = useQuery(
    [q.GET_TAGS, { projectId }],
    getTagsApi
  );

  return { tags, isLoading, isError, ...rest };
}
