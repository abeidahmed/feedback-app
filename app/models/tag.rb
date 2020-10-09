class Tag < ApplicationRecord
  belongs_to :project

  validates_presence_of :name
  validates_length_of :name, maximum: 50
end
