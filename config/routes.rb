Rails.application.routes.draw do
  defaults format: :json do
    namespace :v1 do
      resources :users, only: [:create]
      resources :sessions, only: [:create, :show]
      resources :projects, only: [:index, :create, :update, :destroy] do
        resources :tags, only: [:create, :destroy, :update]
        resources :feedbacks, only: [:create] do
          patch :archive, on: :member
        end
      end
    end
  end
end
