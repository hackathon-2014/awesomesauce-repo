class Battle < ActiveRecord::Base

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
