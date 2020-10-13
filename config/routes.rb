Rails.application.routes.draw do
  defaults format: :json do
    namespace :v1 do
      resources :users, only: [:create]
      resources :sessions, only: [:create, :show]
      resources :projects, only: [:index, :create, :show, :update, :destroy] do
        resources :tags, only: [:index, :create, :destroy, :update]
        resources :feedbacks, only: [:index, :create] do
          patch :archive, on: :member
        end
      end
      resources :colors, only: [:index]
    end
  end
end
