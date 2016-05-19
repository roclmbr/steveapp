Rails.application.routes.draw do
    resources :users, only: [:index, :create, :destroy], defaults: {format: :json}
    root to: "users#index"
    
    get 'users/rock_climbing', to: 'users#rock'
    get 'users/ice_climbing', to: 'users#ice'
end
