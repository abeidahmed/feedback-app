class Feedback < ApplicationRecord
  belongs_to :project
  belongs_to :tag

  validates_presence_of :content
  validates_length_of :content, maximum: 300

  default_scope -> { order(created_at: :desc) }

  def self.filterable(tag_id)
    if tag_id.present?
      where(tag: tag_id)
    else
      self.all
    end
  end
end
