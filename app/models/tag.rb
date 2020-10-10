class Tag < ApplicationRecord
  belongs_to :project
  has_many :feedbacks, dependent: :destroy

  validates_presence_of :name
  validates_length_of :name, maximum: 50
  validates_uniqueness_of :name, case_sensitive: false, scope: :project_id

  VALID_COLOR_REGEX = /\A#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\z/i

  validates_format_of :color, with: VALID_COLOR_REGEX

  def is_archive_tag?
    self.name.downcase == 'archive'
  end
end
