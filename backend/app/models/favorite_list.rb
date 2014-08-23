class FavoriteList < ActiveRecord::Base
  has_many :favorites
  has_many :spells, through: :favorites
  belongs_to :user

  # accepts_nested_attributes_for :spells
end
