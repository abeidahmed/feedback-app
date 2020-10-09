class Project < ApplicationRecord
  after_create :initialize_tags

  belongs_to :user
  has_many :tags

  validates_presence_of :name
  validates_length_of :name, maximum: 50

  def initialize_tags
    self.tags.create! name: 'Issue'
    self.tags.create! name: 'Idea'
    self.tags.create! name: 'Other'
  end
end
