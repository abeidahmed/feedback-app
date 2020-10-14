FactoryBot.define do
  factory :feedback do
    project
    tag
    content { 'Feedback content' }
    tag_name { tag.name }
    sender_email { 'hello@example.com' }
    page_url { '/about' }
    device { 'Chrome 65' }
    archived { false }

    trait :archived do
      archived { true }
    end
  end
end
