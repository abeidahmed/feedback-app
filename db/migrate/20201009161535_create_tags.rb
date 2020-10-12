class CreateTags < ActiveRecord::Migration[6.0]
  def change
    create_table :tags, id: :uuid do |t|
      t.string :name,         null: false
      t.string :text_color,   default: '#f4f5f7'
      t.string :bg_color,     default: '#374151'
      t.references :project,  null: false, type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
