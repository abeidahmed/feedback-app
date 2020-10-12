class Tag < ApplicationRecord
  belongs_to :project
  has_many :feedbacks, dependent: :destroy

  validates_presence_of :name
  validates_length_of :name, maximum: 50
  validates_uniqueness_of :name, case_sensitive: false, scope: :project_id

  def is_archive_tag?
    self.name.downcase == 'archive'
  end

  def set_color(color_id)
    color = Color.new.pick_by_id(color_id)
    self.bg_color = color[:accent]
    self.text_color = color[:contrast]
  end

  DEFAULT_TAGS = [
    { color: 'gray', name: 'Issue' },
    { color: 'red', name: 'Idea' },
    { color: 'yellow', name: 'Other' },
    { color: 'purple', name: 'Archive' }
  ].freeze
end
