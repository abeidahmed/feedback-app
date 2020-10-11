import Cookies from 'js-cookie';
import { TOKEN } from 'store/currentUser/constants';

export function header() {
  const token = Cookies.get(TOKEN);

  const config = {
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
  };

  if (token) config.headers['Authorization'] = `Bearer ${token}`;

  return config;
}
