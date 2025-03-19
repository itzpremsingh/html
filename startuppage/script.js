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
 * Applies a random gradient background (only on refresh)
 */
function applyRandomGradient() {
  let color1 = getRandomDarkColor();
  let color2 = getRandomDarkColor();
  document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
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
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    let searchInput = document.getElementById("searchInput");
    if (searchInput.value.trim() === "") {
      event.preventDefault();
    }
  });

// Run functions
applyRandomGradient();
setInterval(updateTime, 1000);
updateTime();
