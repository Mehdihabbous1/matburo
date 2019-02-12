$(document).foundation();
$( document ).ready(function() {
    
$('.content__caisses_slider').slick({
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  dots: true,
	  arrows:false,
	 responsive: [
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


});
$(document).ready(function(){
  $('.commerce_slider').slick({
      infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  dots: true,
	  arrows:false,
    responsive: [
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});

$(document).ready(function(){
  $('.slider-nav').slick({
  	infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  dots: true,
	  arrows:false,
    responsive: [
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});

$(document).ready(function(){
  $('.your-class-devis').slick({
    
  });
});
$(document).ready(function(){
  $('input,textarea').on('focus',function()
  {
   $(this).siblings().addClass('label-focused');
  });
  $('input,textarea').on('blur',function()
  {
    if($(this).val()=='')
   $(this).siblings().removeClass('label-focused');
  });
});



