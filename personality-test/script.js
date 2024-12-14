const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("resultText");
const resultModal = document.getElementById("resultModal");
const closeBtn = document.getElementById("closeBtn");

let totalScore = 0; // Initialize total score

// Shuffle function to randomize options
function shuffleOptions() {
  const questions = document.querySelectorAll(".question");
  questions.forEach((question) => {
    const options = Array.from(question.querySelectorAll(".options li"));
    const shuffledOptions = shuffleArray(options);
    const optionsList = question.querySelector(".options");
    shuffledOptions.forEach((option) => optionsList.appendChild(option));
  });
}

// Shuffle array function (Fisher-Yates Algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the options on page load
window.onload = shuffleOptions;

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const options = question.querySelectorAll(".options li");
  options.forEach((option) => {
    option.onclick = () => {
      // Prevent re-selecting an option
      if (option.classList.contains("selected")) return;

      // Remove 'selected' class from all siblings of the clicked option
      const siblings = option.parentElement.children;
      for (let sibling of siblings) {
        sibling.classList.remove("selected");
      }
      // Add 'selected' class to the clicked option
      option.classList.add("selected");
    };
  });
});

// Submit button event handler
submitButton.onclick = () => {
  totalScore = 0; // Reset total score for every new submission
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    const options = question.querySelectorAll(".options li");
    options.forEach((option) => {
      if (option.classList.contains("selected")) {
        totalScore += parseInt(option.getAttribute("data-score"));
      }
    });
  });

  // Show result in modal
  //   resultContainer.textContent = `Your score is: ${totalScore}`;
  displayResultModal(totalScore);
};

// Function to display the result modal
function displayResultModal(score) {
  const merits = document.getElementById("meritsList");
  const demerits = document.getElementById("demeritsList");
  let resultMessage = "";

  if (score >= 10 && score <= 14) {
    resultMessage = "You are an Extrovert!";
    merits.innerHTML = "";
    const meritItems = [
      "You easily make friends and connect with new people.",
      "You are full of energy and bring excitement to social gatherings.",
      "You can adapt well to different social environments.",
    ];

    meritItems.forEach((merit) => {
      const li = document.createElement("li");
      li.textContent = merit;
      merits.appendChild(li);
    });

    demerits.innerHTML = "";
    const demeritItems = [
      "You might struggle to spend time alone or reflect deeply.",
      "Sometimes, you may overlook others' boundaries in your enthusiasm.",
      "You could feel uncomfortable in very quiet or slow environments.",
    ];

    demeritItems.forEach((demerit) => {
      const li = document.createElement("li");
      li.textContent = demerit;
      demerits.appendChild(li);
    });
  } else if (score >= 15 && score <= 18) {
    resultMessage = "You are a Restrained Introvert!";

    merits.innerHTML = "";
    const meritItems = [
      "You are thoughtful and avoid acting impulsively.",
      "You excel at forming meaningful, deep relationships.",
      "You balance social time with personal space effectively.",
    ];

    meritItems.forEach((merit) => {
      const li = document.createElement("li");
      li.textContent = merit;
      merits.appendChild(li);
    });

    demerits.innerHTML = "";
    const demeritItems = [
      "You might appear distant or unapproachable to others initially.",
      "You could feel overwhelmed in large social gatherings.",
      "It may take you longer to adapt to new situations.",
    ];

    demeritItems.forEach((demerit) => {
      const li = document.createElement("li");
      li.textContent = demerit;
      demerits.appendChild(li);
    });
  } else if (score >= 19 && score <= 24) {
    resultMessage = "You are an Introspective Introvert!";

    merits.innerHTML = "";
    const meritItems = [
      "You are highly self-aware and understand your emotions well.",
      "You prefer quality over quantity in relationships and activities.",
      "You are creative and think deeply about life and ideas.",
    ];

    meritItems.forEach((merit) => {
      const li = document.createElement("li");
      li.textContent = merit;
      merits.appendChild(li);
    });

    demerits.innerHTML = "";
    const demeritItems = [
      "You might isolate yourself too much, which could lead to loneliness.",
      "Social interactions can feel draining or challenging.",
      "You may overthink situations and delay taking action.",
    ];

    demeritItems.forEach((demerit) => {
      const li = document.createElement("li");
      li.textContent = demerit;
      demerits.appendChild(li);
    });
  } else if (score >= 25 && score <= 30) {
    resultMessage = "You are a Social & Anxious Introvert!";

    merits.innerHTML = "";
    const meritItems = [
      "You prefer deep and meaningful connections with trusted people.",
      "You are empathetic and sensitive to others' feelings.",
      "You are cautious, which helps avoid unnecessary risks.",
    ];

    meritItems.forEach((merit) => {
      const li = document.createElement("li");
      li.textContent = merit;
      merits.appendChild(li);
    });

    demerits.innerHTML = "";
    const demeritItems = [
      "You may struggle with self-doubt or anxiety in social settings.",
      "Avoiding social situations might limit new opportunities.",
      "Overthinking social scenarios can make you feel stressed or uneasy.",
    ];

    demeritItems.forEach((demerit) => {
      const li = document.createElement("li");
      li.textContent = demerit;
      demerits.appendChild(li);
    });
  } else {
    alert("Please select an option for each question.");
    return;
  }

  resultContainer.textContent = resultMessage;
  resultModal.style.display = "block";
}

// Close the modal when the user clicks the close button
closeBtn.onclick = () => {
  resultModal.style.display = "none";
};

// Close the modal if the user clicks outside the modal
window.onclick = (event) => {
  if (event.target === resultModal) {
    resultModal.style.display = "none";
  }
};
