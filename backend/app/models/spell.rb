class Spell < ActiveRecord::Base
  has_many :favorites
  has_many :favorite_lists, through: :favorites
end
