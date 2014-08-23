class CreateBattles < ActiveRecord::Migration
  def change
    create_table :battles do |t|
      t.string :workflow_state

      t.timestamps
    end
  end
end
