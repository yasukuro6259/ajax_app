Rails.application.routes.draw do
  # HTTPメソッド 'URI(URL)パターン', to: 'コントローラー名#アクション名'
  # get '(https://localhost:3000/)posts' ~ ~
  root to: 'posts#index'
  post 'posts', to: 'posts#create'
  get 'posts/:id', to: 'posts#checked' #checkedアクション?
end
