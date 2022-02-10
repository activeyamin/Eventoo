// ==========uiux_slider start=========
$('.uiux__slider').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
// ==========uiux_slider end===========
// ===========event_nicescroll start=========
$("#contentscroll2").niceScroll({
  cursorcolor: "#ffa913",
  cursorwidth:"10px",
  background: "#f1f1f1",
  cursorborder:"0",
  cursorborderradius: "4px",
});

// ===========evemt_mcescrpll end===========
// ==============eventgall_modamig start===========
// ============feedbackreview_slider start==============
$('.feedreview__slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<samp><i class="fas fa-angle-left prev"></i></samp>',
  nextArrow: '<samp><i class="fas fa-angle-right next"></i></samp>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// ===========feedbackreview_slider end===========
// =========pricing__slider start==================
$('.pricing__slider').slick({
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<samp><i class="fas fa-angle-left prev pricprev"></i></samp>',
  nextArrow: '<samp><i class="fas fa-angle-right next pricnext"></i></samp>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// ==============pricing_slider end=========
