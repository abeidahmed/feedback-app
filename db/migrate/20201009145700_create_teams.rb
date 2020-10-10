class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams, id: :uuid do |t|

      t.timestamps
    end
  end
end
