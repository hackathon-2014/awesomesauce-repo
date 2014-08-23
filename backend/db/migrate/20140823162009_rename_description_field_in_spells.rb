class RenameDescriptionFieldInSpells < ActiveRecord::Migration
  def change
    rename_column :spells, :desrciption, :description
  end
end
