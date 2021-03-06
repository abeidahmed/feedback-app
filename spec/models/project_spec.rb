require 'rails_helper'

RSpec.describe Project, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:name) }

    it { should validate_length_of(:name).is_at_most(50) }
  end

  describe 'associations' do
    it { should belong_to(:user) }

    it { should have_many(:tags) }

    it { should have_many(:feedbacks) }

    it { should belong_to(:team) }

    it { should have_one(:invitee) }
  end
end
