import axios from 'axios';
import { header } from 'utils/header';

export async function postInviteTeamMemberApi({ projectId, email }) {
  const { data } = await axios.post(
    `/v1/projects/${projectId}/invitees`,
    {
      user: {
        email,
      },
    },
    header()
  );

  return data;
}
