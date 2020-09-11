Rails.application.routes.draw do
  # HTTPメソッド 'URI(URL)パターン', to: 'コントローラー名#アクション名'
  # get '(https://localhost:3000/)posts' ~ ~
  root to: 'posts#index'
  get 'posts', to: 'posts#index'
  post 'posts', to: 'posts#create'
end
