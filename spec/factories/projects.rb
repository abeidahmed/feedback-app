FactoryBot.define do
  factory :project do
    user
    sequence(:name) { |n| "project#{n}" }
  end
end
