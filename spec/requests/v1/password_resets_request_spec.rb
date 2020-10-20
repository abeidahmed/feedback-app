require 'rails_helper'

RSpec.describe "V1::PasswordResets", type: :request do
  describe '#create' do
    let(:user) { create(:user) }
    let(:valid_user) { { user: { email: user.email.upcase } }.to_json }
    let(:invalid_user) { { user: { email: 'hello@example.com' } }.to_json }

    context 'when the password request is made by a user' do
      before do
        post v1_password_resets_url, params: valid_user, headers: default_header
      end

      it 'is expected to set password_reset_token with SecureRandom hash' do
        expect(user.reload.password_reset_token).to be_present
      end

      it 'is expected to set password_reset_sent_at to current time' do
        expect(user.reload.password_reset_sent_at).to be_present
      end
    end

    context 'when the password request is made by a guest' do
      before do
        post v1_password_resets_url, params: invalid_user, headers: default_header
      end

      include_examples 'invalid_email'

      include_examples 'bad_request'
    end
  end

  describe '#update' do
    let(:user) { create(:user, :password_reset) }
    let(:valid_user) { { user: { password: 'mamakane' } }.to_json }
    let(:invalid_user) { { user: { password: '' } }.to_json }

    context 'when the password reset request is valid' do
      before do
        patch v1_password_reset_url(user.password_reset_token), params: valid_user, headers: default_header
      end

      it 'is expected to reset the password' do
        expect(user.reload.authenticate('mamakane')).to be_truthy
      end

      it 'is expected to reset the password_reset_token field' do
        expect(user.reload.password_reset_token).to be_nil
      end

      it 'is expected to reset the password_reset_sent_at field' do
        expect(user.reload.password_reset_sent_at).to be_nil
      end
    end

    context 'when the token is invalid' do
      let(:valid_user) { { user: { password: 'helloworld' } }.to_json }

      before do
        patch v1_password_reset_url('hellomamakane'), params: valid_user, headers: default_header
      end

      include_examples 'bad_request'
    end

    context 'when the password field is blank' do
      before do
        patch v1_password_reset_url(user.password_reset_token), params: invalid_user, headers: default_header
      end

      it 'is expected to throw error message' do
        expect(json[:message]).to_not be_nil
      end

      include_examples 'bad_request'
    end

    context 'when the password_reset_token has expired' do
      let(:user) { create(:user_password_reset, :expired_token) }
      let(:valid_user) { { user: { password: 'hellowordbro' } }.to_json }

      before do
        patch v1_password_reset_url(user.password_reset_token), params: valid_user, headers: default_header
      end

      it 'is expected to throw error message' do
        expect(json[:message]).to eq('Password reset token has expired')
      end

      include_examples 'bad_request'
    end
  end
end
