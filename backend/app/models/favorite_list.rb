class FavoriteList < ActiveRecord::Base
  has_many :favorite
  has_many :spell, through: :favorite
end
