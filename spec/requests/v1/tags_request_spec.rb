require 'rails_helper'

RSpec.describe "V1::Tags", type: :request do
  describe '#create' do
    let(:team) { create(:team_with_users) }
    let(:project) { create(:project, team: team) } # project creates additional 3 tags (system generated)

    let(:valid_tag) { { tag: { name: 'idea' } }.to_json }
    let(:invalid_tag) { { tag: { name: '' } }.to_json }

    context 'when the post request is made by a team member' do
      before do
        post v1_project_tags_url(project), params: valid_tag, headers: auth_header(team.users.first)
      end

      it 'is expected to create a tag' do
        expect(Tag.count).to eq(4)
      end

      include_examples 'created'
    end

    context 'when the post request is made by a random user' do
      before do
        user = create(:user)
        post v1_project_tags_url(project), params: valid_tag, headers: auth_header(user)
      end

      it 'is expected to not create a tag' do
        expect(Tag.count).to eq(3)
      end

      include_examples 'unauthorized'
    end

    context 'when the post request is invalid' do
      before do
        user = create(:user)
        post v1_project_tags_url(project), params: invalid_tag, headers: auth_header(team.users.first)
      end

      it 'is expected to not create a tag' do
        expect(Tag.count).to eq(3)
      end

      include_examples 'error'

      include_examples 'bad_request'
    end
  end

  describe '#destroy' do
    let(:team) { create(:team_with_users) }
    let(:project) { create(:project, team: team) }
    let(:tag) { create(:tag, project: project) }

    context 'when the delete request is made by a team member' do
      before do
        delete v1_project_tag_url(project, tag), headers: auth_header(team.users.first)
      end

      it 'is expected to delete the tag' do
        expect(project.tags.count).to eq(3)
      end
    end

    context 'when the delete request is made by a random user' do
      before do
        user = create(:user)
        delete v1_project_tag_url(project, tag), headers: auth_header(user)
      end

      it 'is expected to not delete the tag' do
        expect(project.tags.count).to eq(4)
      end

      include_examples 'unauthorized'
    end
  end
end
