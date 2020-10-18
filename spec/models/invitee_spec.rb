require 'rails_helper'

RSpec.describe Invitee, type: :model do
  describe 'associations' do
    it { should have_many(:users) }

    it { should belong_to(:project) }
  end
end
