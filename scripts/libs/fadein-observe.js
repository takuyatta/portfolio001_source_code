// 各要素のフェードインのためのスクロール判定 + inviewクラスの付与の設定

const titleTexts = document.querySelectorAll('.observe-txt'); // タイトルテキストのDOM
const borders = document.querySelectorAll('.observe-border'); // タイトル下線のDOM
const generals = document.querySelectorAll('.observe-gen'); // ボタンやフォームなど汎用フェードイン用の各オブジェクトのDOM
const copyTexts = document.querySelectorAll('.observe-copy'); // キャッチコピーのDOM
const icons = document.querySelectorAll('.observe-icon'); // アイコン要素のDOM
const pics = document.querySelectorAll('.hover-darken'); // 画像のDOM

const cb = function(entries, observer) {
   entries.forEach(entry => {
      if(entry.isIntersecting) {  
         entry.target.classList.add('inview');  // ビューポート内に侵入したら inviewクラスを付与
         observer.unobserve(entry.target);  // 一度inviewクラスを付与したら、もう監視をやめる
      } 
   })
}

const options = {
   rootMargin: "-20% 0px 0px 0px", // ビューポート内に 監視要素が20%以上 侵入してから、発火させる
};

const io = new IntersectionObserver(cb, options);


// 複数ある監視対象要素のDOMをそれぞれ配列化しておく
titleTexts.forEach(titleText => io.observe(titleText));
borders.forEach(border => io.observe(border));
generals.forEach(general => io.observe(general));
copyTexts.forEach(copyText => io.observe(copyText));
icons.forEach(icon => io.observe(icon));
pics.forEach(pic => io.observe(pic));



// トップのカルーセルより下にスクロールしたら、ヘッダーが見えにくくなるので、その範囲に反応させてヘッダーに黒い背景幕を敷く
const headerLine = document.querySelector('.top');


const headerFilm = function(entries, observer) {
   entries.forEach(entry => {
      if(entry.isIntersecting) { 
         document.querySelector('.header__back-film').classList.remove('enter');
      } else { 
         document.querySelector('.header__back-film').classList.add('enter');
      }
   })
}

const headerOptions = {
   rootMargin: "-8% 0px 0px 0px",
};

const bridge_io = new IntersectionObserver(headerFilm, headerOptions);
bridge_io.observe(headerLine);