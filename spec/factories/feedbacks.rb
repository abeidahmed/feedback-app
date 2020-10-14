FactoryBot.define do
  factory :feedback do
    project
    tag
    content { 'Feedback content' }
    sender_email { 'hello@example.com' }
    page_url { '/about' }
    device { 'Chrome 65' }
    archived { false }

    trait :archived do
      archived { true }
    end
  end
end
