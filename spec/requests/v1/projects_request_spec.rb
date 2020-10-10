require 'rails_helper'

RSpec.describe "V1::Projects", type: :request do
  describe '#create' do
    let(:user) { create(:user) }
    let(:valid_project) { { project: { name: 'Main website' } }.to_json }
    let(:invalid_project) { { project: { name: nil } }.to_json }

    context 'before creating the project (when post request is valid)' do
      before do
        post v1_projects_url, params: valid_project, headers: auth_header(user)
      end

      it 'is expected to create a new team (before creating a project)' do
        expect(Team.count).to eq(1)
      end

      it 'is expected to assign the user to the team' do
        expect(user.teams.count).to eq(1)
      end
    end

    context 'after creating the project' do
      before do
        post v1_projects_url, params: valid_project, headers: auth_header(user)
      end

      it 'is expected to create three tags with title: Issue, Idea, Other' do
        expect(Tag.count).to eq(3)
        expect(Tag.first.name).to eq('Issue')
        expect(Tag.second.name).to eq('Idea')
        expect(Tag.third.name).to eq('Other')
      end
    end

    context 'when the post request is valid' do
      before do
        post v1_projects_url, params: valid_project, headers: auth_header(user)
      end

      it 'is expected to create the project' do
        expect(Project.count).to eq(1)
      end

      include_examples 'created'
    end

    context 'when the post request is invalid' do
      before do
        post v1_projects_url, params: invalid_project, headers: auth_header(user)
      end

      it 'is expected to not create the tags' do
        expect(Tag.count).to be_zero
      end

      xit 'is expected to not create the team' do
        expect(Team.count).to be_zero
      end

      it 'is expected to not create the project' do
        expect(Project.count).to be_zero
      end

      include_examples 'error'

      include_examples 'bad_request'
    end
  end

  describe '#update' do
    let(:team) { create(:team_with_users)}
    let(:project) { create(:project, name: 'Hello world', user_id: team.users.first.id, team: team) }

    let(:valid_project) { { project: { name: 'Main website' } }.to_json }
    let(:invalid_project) { { project: { name: nil } }.to_json }

    context 'when the patch request is made by project team member' do
      before do
        patch v1_project_url(project), params: valid_project, headers: auth_header(team.users.second)
      end

      it 'is expected to update the project' do
        project.reload
        expect(project.name).to eq('Main website')
      end
    end

    context 'when the patch request is made by another user' do
      before do
        another_user = create(:user)
        patch v1_project_url(project), params: valid_project, headers: auth_header(another_user)
      end

      it 'is expected to not update the project' do
        project.reload
        expect(project.name).to eq('Hello world')
      end

      include_examples 'unauthorized'
    end

    context 'when the patch request is invalid' do
      before do
        patch v1_project_url(project), params: invalid_project, headers: auth_header(team.users.first)
      end

      include_examples 'error'

      include_examples 'bad_request'
    end
  end
end
