Rails.application.routes.draw do
  defaults format: :json do
    namespace :v1 do
      resources :users, only: [:create]
    end
  end
end
