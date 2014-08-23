class BattleController < ApplicationController

  def index
  end

  def new
  end

  def create
  end

  def show
  end

  def destroy
  end

  private

  def battle_params
    params.require(:battle).permit(:workflow_state)
  end

end
