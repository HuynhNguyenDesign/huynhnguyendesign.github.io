$(".fas").click(function(){
  $(".fas").toggleClass("fa-bars fa-times");
});

var currentYear = (new Date).getFullYear();

$(".copyyear").text(currentYear);

$(".slideshow").slick({
  autoplay: false,
  arrows: false,
  dots: true
});
