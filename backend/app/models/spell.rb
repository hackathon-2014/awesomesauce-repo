class Spell < ActiveRecord::Base
  has_many :favorites
  has_many :favorite_lists, through: :favorites
  has_many :weapons
  # has_many :battles, through: :weapons
end
