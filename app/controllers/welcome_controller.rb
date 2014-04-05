class WelcomeController < ApplicationController

  # def index
  #   @story_skeletons = StorySkeleton.all
  #   render json: @story_skeletons
  # end

  def index
    @story_skeletons = StorySkeleton.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @story_skeletons }
    end
  end
end