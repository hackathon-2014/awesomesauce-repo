class FavoriteList < ActiveRecord::Base
  has_many :favorite
  has_many :spell, through: :favorite
  belongs_to :user

  accepts_nested_attributes_for :spell
end
