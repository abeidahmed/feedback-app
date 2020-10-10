class CreateTeamnations < ActiveRecord::Migration[6.0]
  def change
    create_table :teamnations, id: :uuid do |t|
      t.references :user, null: false, type: :uuid, foreign_key: true
      t.references :team, null: false, type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
