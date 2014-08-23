class FavoriteListsController < ApplicationController
   before_filter :find_list, only:[:show,
    :edit,
    :update,
    :destroy]

  def index
    @list = FavoriteList.all
  end

  def new
    @list = FavoriteList.new
  end

  def create
    @list = FavoriteList.create list_params
    redirect_to favorite_lists_path
  end

  def edit
  end

  def update
    @list = FavoriteList.update_attributes list_params
  end

  def show
    @list = FavoriteList.all
  end

  def destroy
    @list.delete
  end

  private
  def find_list
    @list = FavoriteList.find params[:id]
  end

  def list_params
    params.require(:favorite_list).permit(:name, spell_ids: [])
  end
end
