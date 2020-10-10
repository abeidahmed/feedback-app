require 'rails_helper'

RSpec.describe "V1::Tags", type: :request do
  describe '#create' do
    let(:user) { create(:user) }
    let(:project) { create(:project) } # project creates additional 3 tags (system generated)

    let(:valid_tag) { { tag: { name: 'idea' } }.to_json }
    let(:invalid_tag) { { tag: { name: '' } }.to_json }

    context 'when the post request is valid' do
      before do
        post v1_project_tags_url(project), params: valid_tag, headers: auth_header(user)
      end

      it 'is expected to create a tag' do
        expect(Tag.count).to eq(4)
      end

      include_examples 'created'
    end

    context 'when the post request is invalid' do
      before do
        post v1_project_tags_url(project), params: invalid_tag, headers: auth_header(user)
      end

      it 'is expected to not create a tag' do
        expect(Tag.count).to eq(3)
      end

      include_examples 'error'

      include_examples 'bad_request'
    end
  end
end
