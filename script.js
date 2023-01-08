const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input');

minusButton.addEventListener('click', event => {
  event.preventDefault();
  if (inputField.value > 0) {
    const currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue - 1;
  }

});

plusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
});

var slider = new Swiper('.gallery-slider', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 6,

});

var thumbs = new Swiper('.gallery-thumbs', {
  slidesPerView: 6,
  spaceBetween: 10,
  loop: true,
  slideToClickedSlide: true,
});



$('.testimonials').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  cssEase: 'linear',
  slide: 'li',
  arrows: false,
  responsive: [{
    breakpoint: 850,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,

    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }]
});


slider.controller.control = thumbs;
thumbs.controller.control = slider;




$('.ytvideo[data-video]').one('click', function () {

  var $this = $(this);
  var width = $this.attr("width");
  var height = $this.attr("height");

  $this.html('<iframe src="https://www.youtube.com/embed/' + $this.data("video") + '?autoplay=1"></iframe>');
});