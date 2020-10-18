class AddFieldsToTeamnations < ActiveRecord::Migration[6.0]
  def change
    add_column  :teamnations, :role,    :string
    add_column  :teamnations, :invited, :boolean, default: false
    add_index   :teamnations, [:role, :invited]
  end
end
