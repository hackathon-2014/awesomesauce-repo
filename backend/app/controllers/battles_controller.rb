class BattlesController < ApplicationController
  respond_to :html, :json
  before_filter :find_battle, only:[:show,
    :edit,
    :update,
    :destroy,
    :update_battle]

  def index
    @battles = Battle.all
  end

  def new
  end

  def create
    @battle = Battle.create battle_params
    @spells = []
    params[:battle][:challenger_spells].each do |spell|
      # p spell
      
      @weapon = @battle.weapons.create(
        spell_id: spell[:id],
        user_id: params[:battle][:challenger_id]
      )
      @spells << @weapon.spell
    end
  end

  def update
  end

  def show
  end

  def destroy
  end

  def detect_challenge
    @user = User.find(params[:user_id])
    @battle = Battle.where(workflow_state: 'challenged', challengee_id: @user.id).first
    unless @battle
      render nothing: true
    end
  end

  def update_battle
    @challenger_spells = @battle.weapons.map(&:spell)
    @challengee_spells = []
    params[:challengee_spells].each do |spell|
      # p spell
      
      @weapon = @battle.weapons.create(
        spell_id: spell[:id],
        user_id: params[:battle][:challengee_id]
      )
      @challengee_spells << @weapon.spell
    end

  end

  private

  def battle_params
    params.require(:battle).permit(:workflow_state, :challengee_id, :challenger_id)
  end  

  def find_battle
    @battle = Battle.find params[:id]
  end

end
