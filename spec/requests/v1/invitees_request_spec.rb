require 'rails_helper'

RSpec.describe "V1::Invitees", type: :request do
  describe '#create' do
    context 'when the user has an account' do
      let(:project) { create(:project) }
      let(:user) { create(:user) }
      let(:valid_user) { { user: { email: user.email } }.to_json }
      before do
        post v1_project_invitees_url(project), params: valid_user, headers: auth_header(project.user)
      end

      it 'is expected to add the user to the project invite list' do
        expect(project.invitee.users.count).to eq(1)
      end

      include_examples 'created'
    end

    context 'when the user is already on the project team' do
      let(:team) { create(:team_with_users) }
      let(:project) { create(:project, team: team) }
      let(:valid_user) { { user: { email: team.users.first.email } }.to_json }
      before do
        post v1_project_invitees_url(project), params: valid_user, headers: auth_header(project.user)
      end

      it 'is expected to not add the user to the invite list' do
        expect(project.invitee.users.count).to be_zero
      end
    end

    context 'when the user does not have an account' do
      let(:project) { create(:project) }
      let(:valid_user) { { user: { email: 'example@example.com' } }.to_json }
      before do
        post v1_project_invitees_url(project), params: valid_user, headers: auth_header(project.user)
      end

      it 'is expected to create the user and add it to the invite list' do
        expect(User.last.email).to eq('example@example.com')
      end

      it 'is expected to add the user to the project invite list' do
        expect(project.invitee.users.count).to eq(1)
      end

      include_examples 'created'
    end

    context 'when the user email is invalid' do
      let(:project) { create(:project) }
      let(:valid_user) { { user: { email: 'example' } }.to_json }
      before do
        post v1_project_invitees_url(project), params: valid_user, headers: auth_header(project.user)
      end

      it 'is expected to not add the user to the invite list' do
        expect(project.invitee.users.count).to be_zero
      end

      it 'is expected to return error message' do
        expect(json[:message]).to_not be_nil
      end

      include_examples 'bad_request'
    end
  end
end
