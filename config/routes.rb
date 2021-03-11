Rails.application.routes.draw do
  post 'login/', to: 'auth#create'
  delete 'logout/', to: 'auth#destroy'
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
    end
  end
end
