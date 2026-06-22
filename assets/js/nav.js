(function () {
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("mobile-nav");
  if (!toggle || !menu) return;

  var iconOpen = toggle.querySelector("[data-icon-open]");
  var iconClose = toggle.querySelector("[data-icon-close]");

  function setOpen(isOpen) {
    menu.classList.toggle("hidden", !isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    iconOpen.classList.toggle("hidden", isOpen);
    iconClose.classList.toggle("hidden", !isOpen);
  }

  toggle.addEventListener("click", function () {
    setOpen(menu.classList.contains("hidden"));
  });

  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();
