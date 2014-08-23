class AddChallengerIdAndChallengeeIdToBattles < ActiveRecord::Migration
  def change
    add_column :battles, :challenger_id, :integer
    add_column :battles, :challengee_id, :integer
  end
end
