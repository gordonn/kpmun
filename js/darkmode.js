// Saves the theme setting to the browsers local storage (either "active" or "null") and stores it in a variable
let darkmode = localStorage.getItem("darkmode");

// When darkmode is enabled, add the darkmode class to the <body>
function enableDarkmode() {
  document.body.classList.add("darkmode");

  // Save preference in local storage
  localStorage.setItem("darkmode", "active");
}

// Remove darkmode class from <body>
function disableDarkmode() {
  document.body.classList.remove("darkmode");

  // Clear the saved preference in local storage
  localStorage.setItem("darkmode", null);
}

// If dark mode was previously active, turn it on again when the page loads
if (darkmode === "active") { enableDarkmode() };

// When the button is clicked:
function themeSwitch() {

  // Re-check the current saved theme
  darkmode = localStorage.getItem("darkmode");

  // If it's not "active", enable dark mode; otherwise, disbale it (toggle effect).
  if (darkmode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
}
