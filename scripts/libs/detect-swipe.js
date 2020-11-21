// モバイルメニュー表示時に、スワイプしてトップページに戻れるようにする

// 以下、スワイプ判定の関数記述

function setSwipe(area) {
    let areaDOM = document.querySelector(area);
    let start_X;
    let moving_X;
    let dist = 30;

// タッチ開始時のX軸位置を取得
    areaDOM.addEventListener('touchstart', function(e) {
      e.preventDefault();
      start_X = e.touches[0].pageX;
    }, {passive: false});

// スワイプのX軸移動反応を取得
    areaDOM.addEventListener('touchmove', function(e) {
      e.preventDefault();
      moving_X = e.changedTouches[0].pageX;
    }, {passive: false});

// 指を離した時のX軸位置を取得  差分計算で30px以上右に動いていたら、モバイルメニューを閉じる
    areaDOM.addEventListener('touchend', function(e) {
      if (start_X + dist < moving_X) {
        document.querySelector('#global-container').classList.remove('menu-open');
      } else if (start_X > moving_X + dist) {

      } 
    }, {passive: false});
}

// 以上の関数を実行
setSwipe('.swipe-area');
