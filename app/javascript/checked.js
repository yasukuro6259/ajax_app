function check() {
  const posts = document.querySelectorAll(".post"); //全投稿内容と日時の要素(class="post")情報を取得
  posts.forEach(function (post) {
    if (post.getAttribute("data-load") != null) { //data-load属性がnullでなかった場合、nullを返り値とする。これで処理が終わり以降の処理は実行されない。
      return null;
    }
    post.setAttribute("data-load", "true");
    post.addEventListener("click", () => {        // メモクリック時に動作する処理
      const postId = post.getAttribute("data-id");// クリックされたメモの要素の"data-id"属性値(カスタムデータ)を取得する。
      const XHR = new XMLHttpRequest();           // XML~はAjaxによるリクエストをJSから送るためのオブジェクト、オブジェクトを生成(/post/:idというエンドポイントへのリクエスト処理の為)
      XHR.open("GET", `/posts/${postId}`, true);  // openはXML~のメソッドで、リクエスト内容の指定ができる。open(HTTPメソッド、パスの指定、非同期通信on/off)
      XHR.responseType = "json";                  // responseTypeはXML~のメソッドで、レスポンスの形式を指定できる。
      XHR.send();                                 // sendはXML~のメソッドで、リクエストの送信ができる。(今回は引数の指定は必要ない)
      XHR.onload = () => {                        // onloadはXML~のプロパティで、受信(レスポンスなど)に成功した場合に呼び出されるイベントハドラー
        if (XHR.status != 200) {                  // statusはXML~のメソッド
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;          
        }                        
        const item = XHR.response.post;           // レスポンスされてきたデータ(JSON)にアクセス
        console.log(item);
        if (item.checked === true) {
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("data-check");
        }
      };
    });
  });
}
setInterval(check, 1000);  // check関数が1000msごとに実行される
// window.addEventListener("load", check); ページを読み込むごとにcheck関数が実行される => リロードしないと新規投稿メモにcheck関数が実行されない。

