class Battle < ActiveRecord::Base
  belongs_to :challenger, class_name: "User", foreign_key: :challenger_id
  belongs_to :challengee, class_name: "User", foreign_key: :challengee_id

  include workflow
  workflow do 
    state :challenged do
      event :play, transitions_to: :playing
    end

    state :playing do
      event :finish, transitions_to: :finished
    end

    state :finished
  end
end
