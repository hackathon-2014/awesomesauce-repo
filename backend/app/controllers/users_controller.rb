class UsersController < ApplicationController
  respond_to :html, :json

  def index
    @users = User.all
  end

  def create
    @user = User.new user_params
    @user.save!(validate: false)
    respond_to do |format|
      format.json { render json: @user }
    end
  end

  private
  def user_params
    params.require(:login_info).permit(:email, :password)
  end

end
