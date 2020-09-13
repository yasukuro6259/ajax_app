class PostsController < ApplicationController

  def index #indexアクションを定義した
    @posts = Post.all.order(id: "DESC") # 全てのレコードを@postsに代入、並び順は新しい順(idが大きい順)
  end

  def create
    Post.create(content: params[:content]) #モデル名.create(カラム名: 値)
    redirect_to action: :index #redirect_to action: :リダイレクト先となるアクション　
    #コントローラー等での処理後、アクションに対応するビューファイルを参照せずに、別ページへリダイレクトさせる.
  end

  def checked #checkedアクションの定義（「既読」の操作を行った時に実行されるアクション）
    # binding.pry
    post = Post.find(params[:id]) #ルーティングで設定したid番号のレコードを取得
    if post.checked then # checkedカラムはtrueかfalse
      post.update(checked: false) #既読を解除するためにcheckedカラムをfalseへ変更
    else
      post.update(checked: true) #既読にするためにtrueへ変更
    end
    item = Post.find(params[:id]) #変更後のレコードを取得
    render json: { post: item } # {post: item}はどういう意味？
  end

end
