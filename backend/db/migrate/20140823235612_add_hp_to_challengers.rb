class AddHpToChallengers < ActiveRecord::Migration
  def change
    add_column :battles, :challenger_hp, :integer
    add_column :battles, :challengee_hp, :integer
  end
end
