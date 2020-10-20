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

export async function acceptInvitationApi({ projectId }) {
  const { data } = await axios.post(
    `/v1/projects/${projectId}/invitees/accept_invite`,
    null,
    header()
  );

  return data;
}

export async function declineInvitationApi({ projectId }) {
  const { data } = await axios.delete(
    `/v1/projects/${projectId}/invitees/decline_invite`,
    header()
  );

  return data;
}
