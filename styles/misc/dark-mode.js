// dark-mode.js

document.addEventListener("DOMContentLoaded", function() {
  const toggleSwitch = document.getElementById("toggle-dark-mode");

  // Verifica o estado salvo no Local Storage ao carregar a página
  if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
      toggleSwitch.checked = true;
  }

  toggleSwitch.addEventListener("change", function() {
      if (toggleSwitch.checked) {
          document.body.classList.add("dark-mode");
          localStorage.setItem("darkMode", "enabled");
      } else {
          document.body.classList.remove("dark-mode");
          localStorage.setItem("darkMode", "disabled");
      }
  });
});
