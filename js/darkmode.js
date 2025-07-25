// Saves the theme setting to the browsers local storage (either "active" or "null") and stores it in a variable
let darkmode = localStorage.getItem("darkmode");
const icon = document.getElementById("toggle");

if (darkmode === "active") {
  icon.src = 'img/light-mode.svg';
} else {
  icon.src = 'img/dark-mode.svg';
}

function enableDarkmode() {
  document.documentElement.classList.add("darkmode");

  icon.src = 'img/light-mode.svg';

  // Save preference in local storage
  localStorage.setItem("darkmode", "active");
}

function disableDarkmode() {
  document.documentElement.classList.remove("darkmode");

  icon.src = 'img/dark-mode.svg';

  // Clear the saved preference in local storage
  localStorage.setItem("darkmode", null);
}

// When the button is toggled 
function themeSwitch() {

  // Re-check the current saved theme
  darkmode = localStorage.getItem("darkmode");

  if (darkmode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
}
