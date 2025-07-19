// Saves the theme setting to the browsers local storage (either "active" or "null") and stores it in a variable
let darkmode = localStorage.getItem('darkmode')

// Find button with the ID theme-switch 
const themeSwitch = document.getElementById('theme-switch')

// When darkmode is enabled, add the darkmode class to the <body> 
const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  // Save preference in local storage
  localStorage.setItem('darkmode', 'active')
}

// Remove darkmode class from <body>
const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  // Clear the saved preference in local storage
  localStorage.setItem('darkmode', null)
}

// If dark mode was previously active, turn it on again when the page loads 
if (darkmode === "active") enableDarkmode()

// When the button is clicked:
themeSwitch.addEventListener("click", () => {
  // Re-check the current saved theme
  darkmode = localStorage.getItem('darkmode')
  // Different syntax for if condition:
  // If it's not "active", enable dark mode; otherwise, disbale it(toggle effect).
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

