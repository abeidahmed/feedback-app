class Project < ApplicationRecord
  belongs_to :user

  validates_presence_of :name
  validates_length_of :name, maximum: 50
end
