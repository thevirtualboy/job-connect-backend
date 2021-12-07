Rails.application.routes.draw do
  
  resources :jobs 
  resources :users


  # get "/users", to: "users#index"
  # get "/users/:id", to: "users#show"
  # post "/users", to: "users#create"
  # patch "/users/:id", to: "users#update"
  # delete "/users/:id", to: "users#destroy"

  # get "/jobs", to: "jobs#index"
  # get "/jobs/:id", to: "jobs#show"
  # post "/jobs", to: "jobs#create"
  # patch "/jobs/:id", to: "jobs#update"
  # delete "/jobs/:id", to: "jobs#destroy"

  get "/sessions", to: "sessions#index"
  post "/login", to: "sessions#create"
  get "/me", to: "users#showme"
  delete "/logout", to: "sessions#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
