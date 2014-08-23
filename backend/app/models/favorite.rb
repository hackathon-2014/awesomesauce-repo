class Favorite < ActiveRecord::Base
  belongs_to :spell
  belongs_to :favorite_list
end
