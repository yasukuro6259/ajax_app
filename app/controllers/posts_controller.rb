class PostsController < ApplicationController

  def index #indexアクションを定義した
    @posts = Post.all # 全てのレコードを@postに代入
  end

  def new
  end

  def create
    Post.create(content: params[:content]) #モデル名.create(カラム名: 値)
  end

end
