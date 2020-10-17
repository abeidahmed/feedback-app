import axios from 'axios';
import { header } from 'utils/header';

export async function patchPasswordApi({ token, password }) {
  const { data } = await axios.patch(
    `/v1/password_resets/${token}`,
    {
      user: { password },
    },
    header()
  );

  return data;
}
