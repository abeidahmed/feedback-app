class CreateInvitees < ActiveRecord::Migration[6.0]
  def change
    create_table :invitees, id: :uuid do |t|
      t.references :project, null: false, type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
