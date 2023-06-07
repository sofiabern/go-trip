$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
  });
});

const owl = $(".owl-carousel");
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 30,
  startPosition: 1,
  items: 3,
});
// Go to the previous item
$(".btn-left").click(function () {
  owl.trigger("prev.owl.carousel");
});
// Go to the next item
$(".btn-right").click(function () {
  owl.trigger("next.owl.carousel");
});
