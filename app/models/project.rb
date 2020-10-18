class Project < ApplicationRecord
  after_create :initialize_tags

  belongs_to :user
  belongs_to :team
  has_many :tags, dependent: :destroy
  has_many :feedbacks, dependent: :destroy
  has_one :invitee

  validates_presence_of :name
  validates_length_of :name, maximum: 50

  default_scope -> { order(created_at: :desc) }
  scope :user_part_of, ->(user) { where(team_id: user.teams.pluck(:id)) }

  def initialize_team(current_user)
    ActiveRecord::Base.transaction do
      team = Team.create!
      self.team_id = team.id
      team.add(current_user)
      raise ActiveRecord::Rollback unless self.valid?
    end
  end

  def initialize_tags
    Tag::DEFAULT_TAGS.each do |attr|
      color_hash = Color.new.pick_by_name(attr[:color])

      self.tags.create!(
        name: attr[:name],
        text_color: color_hash[:contrast],
        bg_color: color_hash[:accent]
      )
    end
  end

  def team_members
    self.team.users
  end
end
