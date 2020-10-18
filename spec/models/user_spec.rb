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

    it { should have_many(:invitees) }
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

  describe '#process_user' do
    it 'is expected to set password_reset_token column to Secure Random hash' do
      user = create(:user)
      user.process_user
      expect(user.reload.password_reset_token).to_not be_nil
    end

    it 'is expected to set password_reset_sent_at to current time' do
      user = create(:user)
      user.process_user
      expect(user.reload.password_reset_sent_at).to_not be_nil
    end
  end

  describe '#send_password_reset_email' do
    it 'is expected to send an email address' do
      user = create(:user)
      user.send_password_reset_email
      expect(last_email.subject).to eq('Reset your password')
    end
  end

  describe '#password_reset_token_expired?' do
    context 'when the token has expired' do
      it 'is expected to return true' do
        user = create(:user, :password_reset, password_reset_sent_at: 2.hours.ago)
        expect(user.password_reset_token_expired?).to be_truthy
      end
    end

    context 'when the token has not expired' do
      it 'is expected to return true' do
        user = create(:user, :password_reset)
        expect(user.password_reset_token_expired?).to be_falsy
      end
    end
  end

  describe '#reset_password_reset_fields' do
    it 'is expected to reset the password_reset_token fields' do
      user = create(:user, :password_reset)
      user.reset_password_reset_fields

      expect(user.reload.password_reset_token).to be_nil
      expect(user.reload.password_reset_sent_at).to be_nil
    end
  end
end
