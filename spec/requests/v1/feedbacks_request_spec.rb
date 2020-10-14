require 'rails_helper'

RSpec.describe "V1::Feedbacks", type: :request do
  describe '#create' do
    let(:project) { create(:project) }

    let(:valid_feedback) {
      {
        feedback: {
          content: 'hello world',
          sender_email: 'abeidmama@example.com',
          page_url: '/about',
          device: 'Chrome 65'
        }
      }.to_json
    }

    context 'when the post request is valid' do
      before do
        post v1_project_feedbacks_url(project, tag: 'Issue'), params: valid_feedback, headers: default_header
      end

      it 'is expected to create the feedback' do
        target_project = Project.find(project.id)
        tag_name = target_project.tags.find_by(name: 'Issue')
        expect(tag_name.feedbacks.first.content).to eq('hello world')
      end

      include_examples 'created'
    end
  end

  describe '#archive' do
    let(:team) { create(:team_with_users) }
    let(:project) { create(:project_with_tags, user: team.users.first, team: team) }
    let(:feedback) { project.tags.first.feedbacks.create! content: 'hello', project: project }
    let(:archived_feedback) { create(:feedback, :archived, project: project) }

    context 'when the patch request is valid' do
      before do
        patch archive_v1_project_feedback_url(project, feedback), headers: auth_header(team.users.first)
      end

      it 'is expected to archive the feedback' do
        feedback.reload
        expect(feedback.archived).to be_truthy
      end
    end

    context 'when the feedback is already archived' do
      before do
        patch archive_v1_project_feedback_url(project, archived_feedback), headers: auth_header(team.users.first)
      end

      it 'is expected to undo the archive' do
        archived_feedback.reload
        expect(archived_feedback.archived).to be_falsy
      end
    end
  end
end
