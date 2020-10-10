Rails.application.routes.draw do
  defaults format: :json do
    namespace :v1 do
      resources :users, only: [:create]
      resources :sessions, only: [:create]
      resources :projects, only: [:create, :update, :destroy] do
        resources :tags, only: [:create]
        resources :feedbacks, only: [:create]
      end
    end
  end
end
