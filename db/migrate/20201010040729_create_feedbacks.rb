class CreateFeedbacks < ActiveRecord::Migration[6.0]
  def change
    create_table :feedbacks, id: :uuid do |t|
      t.text :content,          null: false
      t.string :sender_email
      t.string :page_url
      t.string :device
      t.references :project,    null: false, type: :uuid, foreign_key: true
      t.references :tag,        null: false, type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
