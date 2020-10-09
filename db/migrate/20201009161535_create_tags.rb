class CreateTags < ActiveRecord::Migration[6.0]
  def change
    create_table :tags, id: :uuid do |t|
      t.string :name,         null: false
      t.references :project,  null: false, type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
