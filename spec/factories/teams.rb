FactoryBot.define do
  factory :team do
    factory :team_with_users do
      transient do
        users_count { 2 }
      end

      after(:create) do |team, evaluator|
        create_list(:user, evaluator.users_count, teams: [team])
      end
    end
  end
end
