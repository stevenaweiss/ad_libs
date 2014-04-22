class StorySkeletonsController < ApplicationController

  before_action :load_story_skeleton, only: [:show, :edit, :update, :destroy]
  
  def index
    # binding.pry
    @story_skeletons = StorySkeleton.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @story_skeletons }
    end
  end

  def new
    @story_skeleton = StorySkeleton.new
    render(:new)
  end

  def create
    StorySkeleton.create(story_skeleton_params)
    redirect_to(root_path)
  end

  def show
    render json: @story_skeleton
  end

  def edit
    render(:edit)
    # redirect_to root_path
  end

  def update
    @story_skeleton.update(story_skeleton_params)
    redirect_to root_path
  end

  def destroy
    @story_skeleton.destroy
    redirect_to root_path
  end

  private

  def load_story_skeleton
    return @story_skeleton = StorySkeleton.find(params[:id])
  end

  def story_skeleton_params
    params.require(:story_skeleton).permit(:title, :story_text, :category, :number_of_ad_words)
  end

end

