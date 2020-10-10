FactoryBot.define do
  factory :feedback do
    project
    tag
    content { 'Feedback content' }
    tag_name { "issue" }
    sender_email { 'hello@example.com' }
    page_url { '/about' }
    device { 'Chrome 65' }
  end
end
