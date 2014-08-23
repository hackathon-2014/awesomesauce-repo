class SpellsController < ApplicationController
  respond_to :html, :json

  before_filter :find_spell, only:[:show,
    :edit,
    :update,
    :destroy]

  def index
    @spells = Spell.all
  end

  def new
    @spell = Spell.new
  end

  def create
    @spell = Spell.create spell_params
  end

  def edit
  end

  def update
    @spell = Spell.update spell_params
  end

  def show
    @spell = @list.spells
  end

  def destroy
    @spell.delete
  end

  private
  def find_spell
    @spell = Spell.find params[:id]
  end

  def find_list
    @list = Favorite_list.find params[:favorite_list_id]
  end

  def spell_params
    params.require(:spell).permit(:name, :description, :damage_count)
  end


end
