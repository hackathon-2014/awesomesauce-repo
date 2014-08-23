class CreateSpells < ActiveRecord::Migration
  def change
    create_table :spells do |t|

      t.timestamps
    end
  end
end
