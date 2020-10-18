class Invitable < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :invitee
end
