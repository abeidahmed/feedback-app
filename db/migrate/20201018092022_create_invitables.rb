class CreateInvitables < ActiveRecord::Migration[6.0]
  def change
    create_table :invitables, id: :uuid do |t|
      t.references :user,     null: true,   type: :uuid, foreign_key: true
      t.references :invitee,  null: false,  type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
