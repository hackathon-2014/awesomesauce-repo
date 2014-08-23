class BattlesController < ApplicationController
  respond_to :html, :json
  before_filter :find_battle, only:[:show,
    :edit,
    :update,
    :destroy]

  def index
    @battles = Battle.all
  end

  def new
  end

  def create
    @battle = Battle.create params[:battle]
  end

  def update
  end

  def show
  end

  def destroy
  end

  private

  def battle_params
    params.require(:battle).permit(:workflow_state)
  end  

  def find_battle
    @battle = Battle.find params[:id]
  end

end
