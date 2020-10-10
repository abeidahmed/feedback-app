class Feedback < ApplicationRecord
  belongs_to :project
  belongs_to :tag

  validates_presence_of :tag_name, :content
  validates_length_of :content, maximum: 300
end
