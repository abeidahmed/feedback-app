FactoryBot.define do
  factory :feedback do
    content { "MyText" }
    tag_name { "MyString" }
    sender_email { "MyString" }
    page_url { "MyString" }
    device { "MyString" }
    project { nil }
    tag { nil }
  end
end
