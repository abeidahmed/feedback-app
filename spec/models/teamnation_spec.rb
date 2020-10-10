require 'rails_helper'

RSpec.describe Teamnation, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }

    it { should belong_to(:team) }
  end
end
