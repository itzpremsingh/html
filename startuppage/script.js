/**
 * Generates a random dark color
 * @returns {string} Random dark RGB color
 */
function getRandomDarkColor() {
  let r = Math.floor(Math.random() * 100);
  let g = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 150) + 50;
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Generates a random degree
 * @returns {number} Random degree
 */
function getRandomDegrees() {
  let degrees = Math.floor(Math.random() * 360);
  return degrees;
}

/**
 * Applies a random gradient background (only on refresh)
 */
function applyRandomGradient() {
  let color1 = getRandomDarkColor();
  let color2 = getRandomDarkColor();
  let degrees = getRandomDegrees();
  document.body.style.background = `linear-gradient(${degrees}deg, ${color1}, ${color2})`;
}

/**
 * Updates the time display
 */
function updateTime() {
  let now = new Date();
  document.getElementById("time").textContent = now.toLocaleTimeString();
}

// Prevent empty search submission
document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    let searchInput = document.getElementById("search-input");
    if (searchInput.value.trim() === "") {
      event.preventDefault();
    }
  });

// Run functions
applyRandomGradient();
setInterval(updateTime, 1000);
updateTime();
