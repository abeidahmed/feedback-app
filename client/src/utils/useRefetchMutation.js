import { useMutation, queryCache } from 'react-query';

export function useRefetchMutation(api, [...queries] = []) {
  const [mutate, { isLoading }] = useMutation(api, {
    onSuccess: () => {
      for (let query of queries) {
        queryCache.refetchQueries(query);
      }
    },
    throwOnError: true,
  });

  return [mutate, { isLoading }];
}
