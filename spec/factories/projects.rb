FactoryBot.define do
  factory :project do
    user
    team
    sequence(:name) { |n| "project#{n}" }

    factory :project_with_tags do
      transient do
        tags_count { 2 }
      end

      after(:create) do |project, evaluator|
        create_list(:tag, evaluator.tags_count, project: project)
        project.reload
      end
    end
  end
end
