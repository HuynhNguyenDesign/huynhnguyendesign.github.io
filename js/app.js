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

  $(".client-slide").slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 6
  });

}); // End of doc.ready
