class UsersController < ApplicationController
  respond_to :html, :json

  def index
    @users = User.all
  end
end
