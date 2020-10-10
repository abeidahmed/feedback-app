require 'rails_helper'

RSpec.describe Feedback, type: :model do
  describe 'associations' do
    it { should belong_to(:project) }

    it { should belong_to(:tag) }
  end
end
