AdLibs::Application.routes.draw do
  root :to => "welcome#index"

  resources :story_skeletons, only: [:index, :show]
end
