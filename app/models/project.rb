class Project < ApplicationRecord
  after_create :initialize_tags

  belongs_to :user
  belongs_to :team
  has_many :tags, dependent: :destroy
  has_many :feedbacks, dependent: :destroy

  validates_presence_of :name
  validates_length_of :name, maximum: 50

  def initialize_team(current_user)
    ActiveRecord::Base.transaction do
      team = Team.create!
      self.team_id = team.id
      team.add(current_user)
      raise ActiveRecord::Rollback unless self.valid?
    end
  end

  def initialize_tags
    self.tags.create! name: 'Issue'
    self.tags.create! name: 'Idea'
    self.tags.create! name: 'Other'
    self.tags.create! name: 'Archive'
  end

  def team_members
    self.team.users
  end
end
