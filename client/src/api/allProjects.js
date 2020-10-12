import axios from 'axios';
import { useQuery } from 'react-query';
import { header } from 'utils/header';
import * as q from 'global/queryKey';

export async function allProjectsApi(key) {
  return await axios.get('/v1/projects', header());
}

export function useGetProjects() {
  const {
    data: { data: { projects } = {} } = {},
    isLoading,
    isError,
  } = useQuery(q.GET_PROJECTS, allProjectsApi);

  return { projects, isLoading, isError };
}
