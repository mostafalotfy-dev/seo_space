const $ = require("jquery");

$(".navbar-toggler").on("click", function (e) {
  $(".tm-header").toggleClass("show");
  e.stopPropagation();
});

$("html").on("click", function (e) {
  var header = document.getElementById("tm-header");

  if (!header.contains(e.target)) {
    $(".tm-header").removeClass("show");
  }
});

$("#tm-nav .nav-link").on("click", function () {
  $(".tm-header").removeClass("show");
});
