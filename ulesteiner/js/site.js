document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav");
  if (burger && nav) {
    burger.addEventListener("click", function () { nav.classList.toggle("open"); });
  }

  document.querySelectorAll(".acc-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.parentElement.classList.toggle("open");
    });
  });

  var filters = document.querySelectorAll(".filters button");
  var cards = document.querySelectorAll(".pcard");
  if (filters.length && cards.length) {
    filters.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filters.forEach(function (b) { b.classList.remove("on"); });
        btn.classList.add("on");
        var key = btn.getAttribute("data-filter");
        cards.forEach(function (c) {
          c.style.display = (key === "all" || c.getAttribute("data-region") === key) ? "" : "none";
        });
      });
    });
  }
});
