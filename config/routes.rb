AdLibs::Application.routes.draw do
  root :to => "welcome#index"

  resources :user

  resources :story_skeletons, only: [:new, :index, :create, :show]
  # resources :story_skeletons, only: [:destroy, :index, :create, :update]
end
