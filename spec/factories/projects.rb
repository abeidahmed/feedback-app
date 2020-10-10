FactoryBot.define do
  factory :project do
    user
    team
    sequence(:name) { |n| "project#{n}" }
  end
end
