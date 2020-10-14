class Feedback < ApplicationRecord
  belongs_to :project
  belongs_to :tag

  validates_presence_of :content
  validates_length_of :content, maximum: 300

  default_scope -> { order(created_at: :desc) }
  scope :except_archived, -> { where.not(archived: true) }
  scope :archived, -> { where(archived: true) }

  def self.filterable(tag_id, project)
    if tag_id.present?
      @archive_tag = Tag.find(tag_id)
      if @archive_tag.name == 'Archive'
        unscoped.where(project_id: project.id, archived: true)
      else
        where(tag: tag_id)
      end
    else
      self.all
    end
  end
end
