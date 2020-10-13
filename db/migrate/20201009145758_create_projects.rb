class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects, id: :uuid do |t|
      t.string      :name,      null: false
      t.references  :user,      null: false, type: :uuid, foreign_key: true
      t.references  :team,      null: false, type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
