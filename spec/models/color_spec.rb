require 'rails_helper'

RSpec.describe Color, type: :model do
  describe 'when the color index is picked' do
    it 'is expected to return a hash of colors' do
      color = Color.new(1).pick
      expect(color).to eq({ color_name: 'gray', accent: '#f4f5f7', contrast: '#374151', })
    end
  end
end