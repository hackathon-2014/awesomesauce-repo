class Weapon < ActiveRecord::Base
  belongs_to :spell
  belongs_to :battle
  belongs_to :user
end
