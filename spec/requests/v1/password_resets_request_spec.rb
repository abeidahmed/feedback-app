require 'rails_helper'

RSpec.describe "V1::PasswordResets", type: :request do
  describe '#create' do
    let(:user) { create(:user) }
    let(:valid_user) { { user: { email: user.email } }.to_json }
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

      it 'is expected to render an error message' do
        expect(json[:message]).to match(/Invalid email address/)
      end

      include_examples 'bad_request'
    end
  end
end
