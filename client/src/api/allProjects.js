import axios from 'axios';
import { useQuery } from 'react-query';
import { header } from 'utils/header';
import * as q from 'global/queryKey';

async function allProjectsApi(key) {
  const { data } = await axios.get('/v1/projects', header());

  return data;
}

export function useGetProjects() {
  const { data: { projects } = {}, isLoading, isError } = useQuery(
    q.GET_PROJECTS,
    allProjectsApi
  );

  return { projects, isLoading, isError };
}
