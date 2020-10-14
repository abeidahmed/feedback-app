export const postCode = `fetch('https://feeder.com/v1/projects/:project_id/feedbacks?tag=Issue', {
  // The "tag" query param is case sensitive. Eg: "Issue", "Idea", "Other", etc..
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    feedback: {
      content: '', // "The feedback content"
      sender_email: '', // "The user who gives the feedback"
      page_url: '', // "/about", "/login", etc..
      device: '', // "Chrome 64, MacOS", etc..
    }
  }),
})`;
