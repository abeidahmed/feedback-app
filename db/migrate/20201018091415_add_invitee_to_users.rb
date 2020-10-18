class AddInviteeToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :invitee, null: true, type: :uuid, foreign_key: true
  end
end
