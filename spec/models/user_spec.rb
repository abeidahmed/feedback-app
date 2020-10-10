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

  describe 'associations' do
    it { should have_many(:projects) }

    it { should have_many(:teams) }
  end

  describe '::find_by_credentials' do
    let(:user) { create(:user) }

    it 'is expected to return the user when user credentials are valid (downcase email)' do
      expect(described_class.find_by_credentials(user.email.upcase, user.password)).to eq(user)
    end

    it 'is expected to return nil when user credentials are invalid' do
      expect(described_class.find_by_credentials(user.email, 'helloworld')).to be_nil
    end

    it 'is expected to return nil when user is invalid' do
      expect(described_class.find_by_credentials('mamakane@example.com', 'helloworld')).to be_nil
    end
  end
end
