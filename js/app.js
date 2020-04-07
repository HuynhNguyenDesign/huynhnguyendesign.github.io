$("header.fas").click(function() {
  $("header.fas").toggleClass("fa-bars fa-times");
});

var currentYear = (new Date).getFullYear();

$(".copyyear").text(currentYear);

$(".slideshow").slick({
  autoplay: true,
  arrows: false,
  dots: true
});

// Start of Client Slide
$(".client-slide").slick({
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }]
}); //End of Client Slide

$('.num').counterUp({
  delay:10,
  time: 1500
});
