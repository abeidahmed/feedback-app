class Team < ApplicationRecord
  has_many :teamnations, dependent: :destroy
  has_many :users, through: :teamnations
  has_many :projects, dependent: :destroy

  def add(member)
    self.users << member
  end
end
