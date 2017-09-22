Rails.application.routes.draw do
  namespace :api do
    resources :display, only: [:index]
    get 'index', to: 'display#index'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
