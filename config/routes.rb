AdLibs::Application.routes.draw do
  root :to => "welcome#index"

  resources :users, only: [:create]

  resources :story_skeletons, only: [:new, :edit, :index, :create, :show]

  
  get "/login", to: "sessions#new"
  post "/session", to: "sessions#create"
  delete "/session", to: "sessions#destroy"

end
