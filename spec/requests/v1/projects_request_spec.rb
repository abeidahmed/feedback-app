require 'rails_helper'

RSpec.describe "V1::Projects", type: :request do
  describe '#create' do
    let(:user) { create(:user) }
    let(:valid_project) { { project: { name: 'Main website' } }.to_json }
    let(:invalid_project) { { project: { name: nil } }.to_json }

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

      it 'is expected to not create the project' do
        expect(Project.count).to be_zero
      end

      include_examples 'error'

      include_examples 'bad_request'
    end
  end

  describe '#update' do
    let(:user) { create(:user) }
    let(:project) { create(:project, name: 'Hello world', user_id: user.id) }

    let(:valid_project) { { project: { name: 'Main website' } }.to_json }
    let(:invalid_project) { { project: { name: nil } }.to_json }

    context 'when the patch request is made by user' do
      before do
        patch v1_project_url(project), params: valid_project, headers: auth_header(user)
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
        patch v1_project_url(project), params: invalid_project, headers: auth_header(user)
      end

      include_examples 'error'

      include_examples 'bad_request'
    end
  end
end
