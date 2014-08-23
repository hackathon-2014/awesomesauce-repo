class CreateSpells < ActiveRecord::Migration
  def change
    create_table :spells do |t|
      t.string :name
      t.string :desrciption
      t.integer :damage_count

      t.timestamps
    end
  end
end
