require 'rails_helper'

RSpec.describe "V1::Sessions", type: :request do
  describe '#create' do
    let(:user) { create(:user) }

    let(:valid_user) { {
      user: {
        email: user.email,
        password: user.password
      }
    }.to_json }

    let(:invalid_user) { {
      user: {
        email: user.email,
        password: 'helloworld'
      }
    }.to_json }

    context 'when the post request is invalid' do
      before do
        post v1_sessions_url, params: invalid_user, headers: default_header
      end

      include_examples 'bad_request'

      it 'is expected to return an error message' do
        expect(json[:message]).to match(/Invalid credentials/)
      end
    end

    context 'when the post request is valid' do
      before do
        post v1_sessions_url, params: valid_user, headers: default_header
      end

      include_examples 'user_token'
    end
  end
end
