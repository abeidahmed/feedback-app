require 'rails_helper'

RSpec.describe Color, type: :model do
  describe 'when the color index is picked by id' do
    it 'is expected to return a hash of colors' do
      color = Color.new.pick_by_id(1)
      expect(color).to eq({ id: 1, color_name: 'gray', accent: '#f4f5f7', contrast: '#374151', })
    end
  end

  describe 'when the color index is picked by name' do
    it 'is expected to return a hash of colors' do
      color = Color.new.pick_by_name('gray')
      expect(color).to eq({ id: 1, color_name: 'gray', accent: '#f4f5f7', contrast: '#374151', })
    end
  end
end