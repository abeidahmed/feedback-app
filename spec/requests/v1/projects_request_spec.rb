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

    context 'when the post request is made by a guest' do
      before do
        post v1_projects_url, params: valid_project, headers: default_header
      end

      it 'is expected to not create the project' do
        expect(Project.count).to be_zero
      end

      include_examples 'unauthorized'
    end
  end
end
