class Spell < ActiveRecord::Base
  has_many :favorite
  has_many :favorite_list, through: :favorite
end
