class StorySkeleton < ApplicationController
  def index
    @story_skeletons = StorySkeleton.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @story_skeletons }
    end
  end

  def show
    render json: StorySkeleton.find(params[:title])
  end
end