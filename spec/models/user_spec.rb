require 'rails_helper'

RSpec.describe User, type: :model do
  subject { build(:user) }

  describe 'email validations' do
    it { should validate_presence_of(:email)}

    it { should validate_uniqueness_of(:email).case_insensitive }

    it { should_not allow_value('abeidmama', 'abeidm@em@.com').for(:email) }

    it { should allow_value('abeidmama@example.com', 'abeidm@em.uk.com').for(:email) }

    it { should validate_length_of(:email).is_at_most(255) }

    it 'is expected to lowercase email before saving' do
      user = build(:user)
      user.email = user.email.upcase
      user.save!
      expect(user.reload.email).to eq(user.email.downcase)
    end
  end

  describe 'password validations' do
    it { should have_secure_password }

    it { should validate_length_of(:password).is_at_least(5) }
  end
end
