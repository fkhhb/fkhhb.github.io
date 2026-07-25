document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var filterButtons = document.querySelectorAll(".team-filter button");
  var people = document.querySelectorAll(".person");
  if (filterButtons.length && people.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var region = btn.getAttribute("data-region");
        people.forEach(function (p) {
          if (region === "all" || p.getAttribute("data-region") === region) {
            p.style.display = "";
          } else {
            p.style.display = "none";
          }
        });
      });
    });
  }
});
