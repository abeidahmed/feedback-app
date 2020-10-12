require 'rails_helper'

RSpec.describe "V1::Colors", type: :request do
  describe '#index' do
    let(:user) { create(:user) }

    context 'when the request is valid' do
      before do
        get v1_colors_url, headers: auth_header(user)
      end

      it 'is expected to return the colors' do
        color = json[:colors].first
        expect(color.keys).to match_array([:id, :colorName, :textColor, :bgColor])
      end
    end
  end
end
