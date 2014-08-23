class Weapons < ActiveRecord::Base
  belongs_to :spell
  belongs_to :battle
end
