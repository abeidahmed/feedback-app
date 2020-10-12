json.feedbacks @feedbacks do |feedback|
  json.partial! 'feedback', feedback: feedback
end