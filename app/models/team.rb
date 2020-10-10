class Team < ApplicationRecord
  has_many :teamnations
  has_many :users, through: :teamnations
  has_many :projects, dependent: :destroy

  def add(member)
    self.users << member
  end
end
