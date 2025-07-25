// Saves the theme setting to the browsers local storage (either "active" or "null") and stores it in a variable
let darkmode = localStorage.getItem("darkmode");
const icon = document.getElementById("toggle");


// Immediately set icon and theme before anything else
if (darkmode === "active") {
  document.body.classList.add("darkmode");
  icon.src = 'img/light-mode.svg';
} else {
  icon.src = 'img/dark-mode.svg';
}

// When darkmode is enabled, add the darkmode class to the <body>
function enableDarkmode() {
  document.body.classList.add("darkmode");

  // Set light mode icon when in dark mode 
  icon.src = 'img/light-mode.svg';

  // Save preference in local storage
  localStorage.setItem("darkmode", "active");
}

// Remove darkmode class from <body>
function disableDarkmode() {
  document.body.classList.remove("darkmode");

  // Set dark mode icon when in light mode 
  icon.src = 'img/dark-mode.svg';

  // Clear the saved preference in local storage
  localStorage.setItem("darkmode", null);
}

// When the button is clicked:
function themeSwitch() {

  // Re-check the current saved theme
  darkmode = localStorage.getItem("darkmode");

  // If it's not "active", enable dark mode; otherwise, disable it (toggle effect).
  if (darkmode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
}
