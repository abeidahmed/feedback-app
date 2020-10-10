FactoryBot.define do
  factory :tag do
    project
    name { 'Issue' }

    factory :tag_with_feedbacks do
      transient do
        feedbacks_count { 2 }
      end

      after(:create) do |tag, evaluator|
        create_list(:feedback, evaluator.feedbacks_count, tag: tag)
        tag.reload
      end
    end
  end
end
