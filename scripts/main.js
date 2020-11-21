// ハンバーガーメニューの クリック時のトリガー
const mobileMenu = document.querySelector('.mobile-menu__btn');
mobileMenu.addEventListener('click',function() {
   document.querySelector('#global-container').classList.toggle('menu-open');
});



// フッターのトップへ戻る矢印の出現トリガー + クリック時の移動処理
const bottomLine = document.querySelector('.footer');

const backToTop = function(entries, observer) {
   entries.forEach(entry => {
      if(entry.isIntersecting) {  
         entry.target.classList.add('inview');
      } else { 
         entry.target.classList.remove('inview');
      }
   })
}
const ioBottom = new IntersectionObserver(backToTop);
ioBottom.observe(bottomLine);

const backBtn = document.querySelector('.to-top');
backBtn.addEventListener('click',function(){
   window.scrollTo({ top: 0, behavior: 'smooth' });
   
});


