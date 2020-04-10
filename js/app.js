$("header.fas").click(function() {
  $("header.fas").toggleClass("fa-bars fa-times");
});

var currentYear = (new Date).getFullYear();

$(".copyyear").text(currentYear);

$(window).bind("load", function(){


    $(".ghost").ghosttyper({
      messages: ["it recruitment at its finest", "simple process", "deep understanding", "accurate consulting"],
      timeWrite: 20,
      timeDelete: 10,
      timePause: 2680
    });

    $(".slideshow").delay("20").slick({
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2900,
      draggable: false,
      pauseOnHover: false,
      pauseOnFocus: false,
    });

});

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
  delay: 10,
  time: 1500,
  offset: 100,
  beginAt: 0
});
