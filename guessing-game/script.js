let randomNumber;
let maxLives;
let currentLives;

function showModal(modalId) {
  document.getElementById(modalId).classList.remove("hidden");
}

function hideModal(modalId) {
  document.getElementById(modalId).classList.add("hidden");
}

function startCustomGame() {
  const startRange = parseInt(
    document.getElementById("custom-range-start").value
  );
  const endRange = parseInt(document.getElementById("custom-range-end").value);
  maxLives = parseInt(document.getElementById("max-lives").value);

  randomNumber =
    Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
  currentLives = maxLives;

  document.getElementById(
    "range"
  ).textContent = `Guess a number between ${startRange} and ${endRange}`;
  document.getElementById("lives").textContent = `Lives: ${currentLives}`;
  document.getElementById("game-section").classList.remove("hidden");

  userInput = document.getElementById("user-guess");

  userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      makeGuess();
    }
  });

  hideModal("custom-mode-popup");
  document.getElementById("start-btn").classList.add("hidden");

  document.getElementById("user-guess").value = "";
  document.getElementById("result").textContent = "";
}

function makeGuess() {
  const userGuess = parseInt(document.getElementById("user-guess").value);
  const resultText = document.getElementById("result");

  if (isNaN(userGuess)) {
    resultText.textContent = "Please enter a valid number!";
    return;
  }

  if (userGuess === randomNumber) {
    document.getElementById(
      "popup-message"
    ).textContent = `Congratulations! You guessed the number in ${
      maxLives - currentLives + 1
    } tries!`;
    showModal("result-popup");
    document.getElementById("game-section").classList.add("hidden");
    document.getElementById("start-btn").classList.remove("hidden");
  } else {
    currentLives--;
    document.getElementById("lives").textContent = `Lives: ${currentLives}`;

    if (currentLives === 0) {
      document.getElementById(
        "popup-message"
      ).textContent = `Game Over! The number was ${randomNumber}.`;
      showModal("result-popup");
      document.getElementById("game-section").classList.add("hidden");
      document.getElementById("start-btn").classList.remove("hidden");
    } else {
      resultText.textContent =
        userGuess < randomNumber
          ? "Your guess is too low! Try higher."
          : "Your guess is too high! Try lower.";
    }
  }
}
