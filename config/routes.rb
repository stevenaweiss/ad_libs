AdLibs::Application.routes.draw do
  root :to => "welcome#index"

  resources :story_skeletons, only: [:index, :show]
  # resources :story_skeletons, only: [:destroy, :index, :create, :update]
end
