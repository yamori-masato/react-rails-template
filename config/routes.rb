Rails.application.routes.draw do
  post 'login/', to: 'auth#create'
  delete 'logout/', to: 'auth#destroy'
end
