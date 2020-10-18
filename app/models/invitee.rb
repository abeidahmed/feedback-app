class Invitee < ApplicationRecord
  belongs_to :project
  has_many :invitable
  has_many :users, through: :invitable
end
