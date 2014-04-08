class StorySkeletonsController < ApplicationController

  def new
    @story_skeleton = StorySkeleton.new
    render(:new)
  end

  def create
    # binding.pry
    StorySkeleton.create(story_skeleton_params)
    redirect_to(root_path)
  end

  def index
    @story_skeletons = StorySkeleton.all
    render json: @story_skeletons
  end

  def show
    @story_skeleton = StorySkeleton.find(params[:id])
    render json: @story_skeleton
  end

  private

  def story_skeleton_params
    params.require(:story_skeleton).permit(:title, :story_text, :category, :number_of_ad_words)
  end

end

