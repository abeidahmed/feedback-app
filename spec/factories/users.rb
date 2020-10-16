FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "email#{n}@example.com" }
    password { 'coolpassword' }

    trait :password_reset do
      password_reset_token { 'helloworld' }
      password_reset_sent_at { Time.zone.now }
    end
  end
end
