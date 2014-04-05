class StorySkeletonsController < ApplicationController
  def index
    @story_skeletons = StorySkeleton.all
    render json: @story_skeletons
  end

  def show
    @story_skeleton = StorySkeleton.find(params[:id])
    render json: @story_skeleton
  end
end