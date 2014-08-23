class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :favorite_list_id
      t.integer :spell_id

      t.timestamps
    end
  end
end
