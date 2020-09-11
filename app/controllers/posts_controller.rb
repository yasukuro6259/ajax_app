class PostsController < ApplicationController

  def index #indexアクションを定義した
    @posts = Post.all.order(id: "DESC") # 全てのレコードを@postsに代入、並び順は新しい順(idが大きい順)
  end

  def create
    Post.create(content: params[:content]) #モデル名.create(カラム名: 値)
    redirect_to action: :index #redirect_to action: :リダイレクト先となるアクション　
    #コントローラー等での処理後、アクションに対応するビューファイルを参照せずに、別ページへリダイレクトさせる.

  end

end
