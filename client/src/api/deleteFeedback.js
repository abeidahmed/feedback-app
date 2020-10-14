import axios from 'axios';
import { header } from 'utils/header';

export async function deleteFeedbackApi({ projectId, id }) {
  const { data } = await axios.delete(
    `/v1/projects/${projectId}/feedbacks/${id}`,
    header()
  );

  return data;
}
