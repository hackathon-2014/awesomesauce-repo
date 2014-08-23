class SpellsController < ApplicationController
  before_filter :find_spell, only:[:show,
    :edit,
    :update,
    :destroy]

  def new
    @spell = Spell.new
  end

  def create
    @spell = Spell.create spell_params
  end

  def edit
  end

  def update
  end

  def show
  end

  def destroy
  end

  private
  def find_spell
    @spell = Spell.find params[:id]
  end

end
