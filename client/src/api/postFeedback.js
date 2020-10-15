import axios from 'axios';
import { header } from 'utils/header';

export async function postFeedbackApi({
  projectId,
  content,
  currentUserEmail,
  pageUrl,
  device,
  tag,
}) {
  const { data } = await axios.post(
    `/v1/projects/${projectId}/feedbacks?tag=${tag}`,
    {
      feedback: {
        content,
        sender_email: currentUserEmail,
        page_url: pageUrl,
        device,
      },
    },
    header()
  );

  return data;
}
