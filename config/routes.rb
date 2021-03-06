Rails.application.routes.draw do
  defaults format: :json do
    namespace :v1 do
      resources :users, only: [:create]

      resources :sessions, only: [:create, :show]

      resources :password_resets, only: [:create, :show, :update]

      resources :projects, only: [:index, :create, :show, :update, :destroy] do
        resources :tags, only: [:index, :create, :destroy, :update] do
          get :archive, on: :collection
        end

        resources :invitees, only: [:create] do
          collection do
            post :accept_invite
            delete :decline_invite
          end
        end

        resources :feedbacks, only: [:index, :create, :destroy] do
          patch :archive, on: :member
        end
      end

      resources :colors, only: [:index]
    end
  end
  get "/*path", to: "root#root"
end
