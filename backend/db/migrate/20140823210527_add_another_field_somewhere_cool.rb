class AddAnotherFieldSomewhereCool < ActiveRecord::Migration
  def change
    add_column :weapons, :user_id, :integer
  end
end
