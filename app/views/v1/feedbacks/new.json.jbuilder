json.feedback do
  json.id @feedback.id
  json.content @feedback.content
  json.tag @feedback.tag
  json.sender_email @feedback.sender_email
  json.page_url @feedback.page_url
  json.device @feedback.device
  json.created_at @feedback.created_at
end