AdLibs::Application.routes.draw do
  root :to => "welcome#index"

  resources :story_skeletons, only: [:show]
end
