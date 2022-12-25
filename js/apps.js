

$(function () {
      $(window).on('load', function() {
        $('#preloader').fadeOut(2000);
      })


    $('.banner_slider').slick({
        arrows: false,
        autoplay: true,
        autoplayspeed: 600,
        speed:600,
        dots:true,
        dotsClass:'banner_slider_dots'
    })

    $('.recent_product_slider').slick({
      slidesToShow:4,
      prevArrow:'<i class="fa-solid fa-chevron-left recent_product_slider_icon"></i>',
      nextArrow:'<i class="fa-solid fa-chevron-right recent_product_slider_icon"></i>',
    
    }
      
    )

  });
