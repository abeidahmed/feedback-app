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
    gray_color = Color.new.pick_by_name('gray')
    red_color = Color.new.pick_by_name('red')
    yellow_color = Color.new.pick_by_name('yellow')
    purple_color = Color.new.pick_by_name('purple')

    self.tags.create! name: 'Issue', text_color: red_color[:contrast], bg_color: red_color[:accent]
    self.tags.create! name: 'Idea', text_color: yellow_color[:contrast], bg_color: yellow_color[:accent]
    self.tags.create! name: 'Other', text_color: purple_color[:contrast], bg_color: purple_color[:accent]
    self.tags.create! name: 'Archive', text_color: gray_color[:contrast], bg_color: gray_color[:accent]
  end

  def team_members
    self.team.users
  end
end
