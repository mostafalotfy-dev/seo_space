const $ = require("jquery");

$(".navbar-toggler").on("click", function (e) {
  $(".tm-header").toggleClass("show");
  e.stopPropagation();
});

$("html").on("click", function (e) {
  var header = $("#tm-header");

  if (!header.has(e.target)) {
    $(".tm-header").removeClass("show");
  }
});

$("#tm-nav .nav-link").on("click", function () {
  $(".tm-header").removeClass("show");
});
