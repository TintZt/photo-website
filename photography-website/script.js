document.addEventListener("DOMContentLoaded", () => {

  // ---- gallry  ----- //
  const panels = document.querySelectorAll('.panel');

  panels.forEach(panel => {
    panel.addEventListener('click', () => {

      panels.forEach(item => item.classList.remove('active'));
      panel.classList.add('active');

    });
  });

  // ----- m menu  -------//
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // ------ dark mode  -------//
  const themeBtn = document.getElementById("themeBtn");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {

      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerHTML = '<i class="uil uil-sun"></i>';
      } else {
        themeBtn.innerHTML = '<i class="uil uil-moon"></i>';
      }

    });
  }

  console.log("Website Loaded");

});
