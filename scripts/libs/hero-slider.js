// トップのカルーセルの プロパティ詳細

let swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 800,
    spaceBetween: 30,
    autoplay: { delay: 3000, disableOnInteraction: false },
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });