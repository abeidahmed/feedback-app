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

      include_examples 'invalid_credentials'

      include_examples 'bad_request'
    end

    context 'when the post request is valid' do
      before do
        post v1_sessions_url, params: valid_user, headers: default_header
      end

      include_examples 'user_token'
    end
  end

  describe '#show' do
    let(:user) { create(:user) }

    context 'when the user is logged in' do
      before do
        get v1_session_url('current_user'), headers: auth_header(user)
      end

      include_examples 'user_token'
    end
  end
end
