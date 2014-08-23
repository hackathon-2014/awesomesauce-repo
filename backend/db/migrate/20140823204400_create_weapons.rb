class CreateWeapons < ActiveRecord::Migration
  def change
    create_table :weapons do |t|
      t.integer :spell_id
      t.integer :battle_id
      t.timestamps
    end
  end
end
