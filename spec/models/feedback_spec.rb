require 'rails_helper'

RSpec.describe Feedback, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:tag_name) }

    it { should validate_presence_of(:content) }

    it { should validate_length_of(:content).is_at_most(300) }
  end

  describe 'associations' do
    it { should belong_to(:project) }

    it { should belong_to(:tag) }
  end
end
