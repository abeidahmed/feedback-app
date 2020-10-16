class AddPasswordResetToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column  :users, :reset_token,         :string
    add_column  :users, :reset_token_sent_at, :datetime
    add_index   :users, :reset_token
  end
end
