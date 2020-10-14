function PostReqCode() {
  return `fetch('https://api.feedback.fish/feedback', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    projectId: 'ae77fce6b9fb09',
    text: feedbackText,
    category: '', // Either "issue", "idea" or "other",
    userId: currentUser.email,
    metadata: {},
  }),
})`;
}

export default PostReqCode;
