json.id feedback.id
json.created_at time_ago_in_words(feedback.created_at)
json.content feedback.content
json.sender_email feedback.sender_email
json.device feedback.device
json.page_url feedback.page_url
json.archived feedback.archived?

json.included do
  json.tag do
    json.partial! 'v1/tags/tag', tag: feedback.tag
  end
end