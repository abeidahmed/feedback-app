import axios from 'axios';
import { useQuery } from 'react-query';
import { header } from 'utils/header';
import * as q from 'global/queryKey';

async function getColorsApi(key) {
  const { data } = await axios.get('/v1/colors', header());

  return data;
}

export function useGetColors() {
  const { data: { colors } = {}, isLoading, isError } = useQuery(
    q.GET_COLORS,
    getColorsApi
  );

  return { colors, isLoading, isError };
}
