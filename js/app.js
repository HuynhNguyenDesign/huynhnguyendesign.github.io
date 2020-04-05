$(document).ready(function(){

  $("header.fas").click(function(){
    $("header.fas").toggleClass("fa-bars fa-times");
  });

  var currentYear = (new Date).getFullYear();

  $(".copyyear").text(currentYear);

  $(".slideshow").slick({
    autoplay: true,
    arrows: false,
    dots: true
  });

  // $(".client-slide").slick({
  //   autoplay: true,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1
  //     }
  //   }
  // ]
  });
});
