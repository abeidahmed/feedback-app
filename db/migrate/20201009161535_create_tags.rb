class CreateTags < ActiveRecord::Migration[6.0]
  def change
    create_table :tags, id: :uuid do |t|
      t.string :name,         null: false
      t.string :color,        default: '#9fa6b2'
      t.references :project,  null: false, type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
