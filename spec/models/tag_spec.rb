require 'rails_helper'

RSpec.describe Tag, type: :model do
  subject { build(:tag) }

  describe 'validations' do
    it { should validate_presence_of(:name) }

    it { should validate_length_of(:name).is_at_most(50) }
  end

  describe 'associations' do
    it { should belong_to(:project) }

    it { should have_many(:feedbacks) }
  end
end
