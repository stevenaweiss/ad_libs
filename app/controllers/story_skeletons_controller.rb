class StorySkeleton < ApplicationController
  def index
    @story_skeletons = StorySkeleton.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @story_skeletons }
    end
  end

  def show
    @story_skeleton = StorySkeleton.find(params[:id])
    render json: @story_skeleton
  end
end