import { useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

export function useAddQuery() {
  const location = useLocation();
  const history = useHistory();

  const addQuery = useCallback(
    (key, value) => {
      let pathname = location.pathname;
      let searchParams = new URLSearchParams(location.search);
      searchParams.set(key, value);
      history.push({
        pathname: pathname,
        search: searchParams.toString(),
      });
    },
    [location, history]
  );

  return addQuery;
}
