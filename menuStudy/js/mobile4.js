$(document).ready(function(){
    const swiper = new Swiper('.md_recom', {  /*const로 상수 처리*/
      slidesPerView:4,
      centeredSlides: true, /* true: 계속 순환하도록함 / false: 돌다가 멈춤 */
      loop:true
    });
  });