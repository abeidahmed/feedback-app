import axios from 'axios';
import { useQuery } from 'react-query';
import { header } from 'utils/header';
import * as q from 'global/queryKey';

async function showProjectApi(key, { id }) {
  const { data } = await axios.get(`/v1/projects/${id}`, header());

  return data;
}

export function useShowProject({ id }) {
  const { data: { project } = {}, isLoading, isError } = useQuery(
    [q.SHOW_PROJECT, { id }],
    showProjectApi
  );

  return { project, isLoading, isError };
}
