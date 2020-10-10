require 'rails_helper'

RSpec.describe "V1::Feedbacks", type: :request do
  describe '#create' do
    let(:project) { create(:project) }
    let(:tag) { create(:tag) }

    let(:valid_feedback) {
      {
        feedback: {
          content: 'hello world',
          tag_name: 'issue',
          sender_email: 'abeidmama@example.com',
          page_url: '/about',
          device: 'Chrome 65'
        }
      }.to_json
    }

    context 'when the post request is valid' do
      before do
        post v1_project_feedbacks_url(project), params: valid_feedback, headers: default_header
      end

      it 'is expected to create the feedback' do
        target_project = Project.find(project.id)
        tag_name = target_project.tags.find_by(name: 'Issue')
        expect(tag_name.feedbacks.first.content).to eq('hello world')
      end

      include_examples 'created'
    end
  end
end
