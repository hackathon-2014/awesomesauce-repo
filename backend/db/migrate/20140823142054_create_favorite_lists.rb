class CreateFavoriteLists < ActiveRecord::Migration
  def change
    create_table :favorite_lists do |t|

      t.timestamps
    end
  end
end
