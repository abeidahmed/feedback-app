require 'rails_helper'

RSpec.describe "V1::Users", type: :request do
  describe '#create' do
    let(:user) { build(:user) }

    let(:valid_user) { {
      user: {
        email: user.email,
        password: user.password
      }
    }.to_json }

    let(:invalid_user) { {
      user: {
        email: user.email,
        password: nil
      }
    }.to_json }

    context 'when the post request is invalid' do
      before do
        post v1_users_url, params: invalid_user, headers: default_header
      end

      include_examples 'bad_request'

      it 'is expected to return an error message' do
        expect(json[:message]).to_not be_nil
      end
    end

    context 'when the post request is valid' do
      before do
        post v1_users_url, params: valid_user, headers: default_header
      end

      it 'is expected to save the user' do
        expect(User.all.size).to eq(1)
      end

      include_examples 'user_token'

      include_examples 'created'
    end
  end
end
