class FavoriteListsController < ApplicationController
   before_filter :find_list, only:[:show,
    :edit,
    :update,
    :destroy]

  def new
    @list = Favorite_list.new
  end

  def create
    @list = Favorite_list.create list_params
  end

  def edit
  end

  def update
    @list = Favorite_list.update_attributes list_params
  end

  def show
    @list = Favorite_list.all
  end

  def destroy
    @list.delete
  end

  private
  def find_list
    @list = Favorite_list.find params[:id]
  end

  def list_params
    params.require(:favorite_list).permit(:name)
  end
end
