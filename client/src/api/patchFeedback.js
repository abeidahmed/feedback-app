import axios from 'axios';
import { header } from 'utils/header';

export async function archiveFeedbackApi({ projectId, id }) {
  const { data } = await axios.patch(
    `/v1/projects/${projectId}/feedbacks/${id}/archive`,
    null,
    header()
  );

  return data;
}
