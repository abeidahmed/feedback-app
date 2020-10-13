require 'rails_helper'

RSpec.describe "V1::Tags", type: :request do
  describe '#index' do
    let(:team) { create(:team_with_users) }
    let(:project) { create(:project_with_tags, team: team, tags_count: 2) }
    let(:another_project) { create(:project_with_tags, team: team, tags_count: 2) }

    context 'when the request is valid' do
      before do
        get v1_project_tags_url(project), headers: auth_header(project.team.users.first)
      end

      it 'is expected to list all the tags (except archive tag) respective to the project' do
        expect(json[:tags].count).to eq(6)
      end
    end
  end

  describe '#create' do
    let(:team) { create(:team_with_users) }
    let(:project) { create(:project, team: team) } # project creates additional 4 tags (system generated)

    let(:valid_tag) { { tag: { name: 'best idea', color_id: 1 } }.to_json }
    let(:invalid_tag) { { tag: { name: '' } }.to_json }

    context 'when the post request is made by a team member' do
      before do
        post v1_project_tags_url(project), params: valid_tag, headers: auth_header(team.users.first)
      end

      it 'is expected to create a tag' do
        expect(Tag.count).to eq(5)
      end

      it 'is expected to set the appropriate color of the tag' do
        expect(Tag.last.bg_color).to eq(Color.new.pick_by_id(1)[:accent])
      end

      include_examples 'created'
    end

    context 'when the post request is made by a random user' do
      before do
        user = create(:user)
        post v1_project_tags_url(project), params: valid_tag, headers: auth_header(user)
      end

      it 'is expected to not create a tag' do
        expect(Tag.count).to eq(4)
      end

      include_examples 'unauthorized'
    end

    context 'when the post request is invalid' do
      before do
        user = create(:user)
        post v1_project_tags_url(project), params: invalid_tag, headers: auth_header(team.users.first)
      end

      it 'is expected to not create a tag' do
        expect(Tag.count).to eq(4)
      end

      include_examples 'error'

      include_examples 'bad_request'
    end
  end

  describe '#update' do
    let(:team) { create(:team_with_users) }
    let(:project) { create(:project, team: team) } # project creates additional 4 tags (system generated)
    let(:tag) { create(:tag, name: 'great idea', project: project) }
    let(:archive_tag) { project.tags.find_by(name: 'Archive') }

    let(:valid_tag) { { tag: { name: 'great idea', color_id: 1 } }.to_json }

    context 'when the patch request is made on the archive tag' do
      before do
        patch v1_project_tag_url(project, archive_tag), params: valid_tag, headers: auth_header(team.users.first)
      end

      it 'is expected to not update the tag' do
        archive_tag.reload
        expect(archive_tag.name).to eq('Archive')
      end

      include_examples 'bad_request'
    end

    context 'when the patch request is made by a team member' do
      before do
        patch v1_project_tag_url(project, tag), params: valid_tag, headers: auth_header(team.users.first)
      end

      it 'is expected to update the tag' do
        tag.reload
        expect(tag.name).to eq('great idea')
      end

      it 'is expected to update the color' do
        tag.reload
        expect(tag.bg_color).to eq(Color.new.pick_by_id(1)[:accent])
      end
    end

    context 'when the patch request is made by a random user' do
      before do
        user = create(:user)
        patch v1_project_tag_url(project, tag), params: valid_tag, headers: auth_header(user)
      end

      it 'is expected to not update the tag' do
        tag.reload
        expect(tag.name).to eq('great idea')
      end

      include_examples 'unauthorized'
    end
  end

  describe '#destroy' do
    let(:team) { create(:team_with_users) }
    let(:project) { create(:project, team: team) } # project creates additional 4 tags (system generated)
    let(:tag) { create(:tag, project: project) }

    context 'when the delete request is made by a team member' do
      before do
        delete v1_project_tag_url(project, tag), headers: auth_header(team.users.first)
      end

      it 'is expected to delete the tag' do
        expect(project.tags.count).to eq(4)
      end
    end

    context 'when the delete request is made on the archive tag' do
      before do
        archive_tag = project.tags.find_by(name: 'Archive')
        delete v1_project_tag_url(project, archive_tag), headers: auth_header(team.users.first)
      end

      it 'is expected to not delete the tag' do
        expect(project.tags.count).to eq(4)
      end

      include_examples 'bad_request'
    end

    context 'when the delete request is made by a random user' do
      before do
        user = create(:user)
        delete v1_project_tag_url(project, tag), headers: auth_header(user)
      end

      it 'is expected to not delete the tag' do
        expect(project.tags.count).to eq(5)
      end

      include_examples 'unauthorized'
    end
  end

  describe '#archive' do
    let(:user) { create(:user) }
    let(:project) { create(:project) }
    let(:tag) { create(:tag, name: 'Archive', project: project) }

    context 'when the request is valid' do
      before do
        get archive_v1_project_tags_url(project), headers: auth_header(user)
      end

      it 'is expected to return only the archive tag' do
        expect(json.dig(:tag, :name)).to eq('Archive')
      end
    end
  end
end
