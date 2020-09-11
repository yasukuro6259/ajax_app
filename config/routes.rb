Rails.application.routes.draw do
  # HTTPメソッド 'URI(URL)パターン', to: 'コントローラー名#アクション名'
  # get '(https://localhost:3000/)posts' ~ ~
  get 'posts', to: 'posts#index'
  get 'posts/new', to: 'posts#new'
  post 'posts', to: 'posts#create'
end
