function memo() {
  const submit = document.getElementById("submit");
 submit.addEventListener("click", (e) => {
   const formData = new FormData(document.getElementById("form"));//new FormData(フォームの要素); => フォームに入力された値を取得
   const XHR = new XMLHttpRequest();                              //非同期実装に必要なXHRオブジェクトの生成
   XHR.open("POST", "/posts", true);                              //リクエスト内容の設定, trueは非同期通信の設定
   XHR.responseType = "json";                                     //レスポンスのデータ送付形式の設定
   XHR.send(formData);
   XHR.onload = () => {
     if (XHR.status != 200) {
       alert(`Error ${XHR.status}: ${XHR.statusText}`);
       return null;
     }
     const item = XHR.response.post;
     const list = document.getElementById("list");
     const formText = document.getElementById("content");
     const HTML = `
       <div class="post" data-id=${item.id}>
         <div class="post-date">
           投稿日時：${item.created_at}
         </div>
         <div class="post-content">
         ${item.content}
         </div>
       </div>`;
     list.insertAdjacentHTML("afterend", HTML);           //要素.insertAdjacentHTML("afterend", HTML情報); 要素の直後にHTML情報を挿入
     formText.value = "";
   };
   e.preventDefault();                                    //現在進行中のイベントを中止する。
 });
}
window.addEventListener("load", memo);
