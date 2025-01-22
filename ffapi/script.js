const dropdownHeader = document.getElementById("dropdown-header");
const dropdownList = document.getElementById("dropdown-list");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const uidInput = document.getElementById("uid-input");
const form = document.querySelector("form");

let selectedRegionValue = ""; // Variable to store the selected region's data-value

// Function to add red border for errors
function showError(element) {
  element.style.border = "2px solid red";
  element.style.boxShadow = "0 0 10px rgba(255, 0, 0, 0.5)";
}

// Function to remove red border when error is solved
function removeError(element) {
  element.style.border = "";
  element.style.boxShadow = "";
}

dropdownHeader.addEventListener("click", () => {
  dropdownList.classList.toggle("active");
});

dropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Get the data-value of the clicked item
    selectedRegionValue = item.getAttribute("data-value");

    // Update the header with the selected region name
    dropdownHeader.innerHTML = `${item.innerText} <span>▼</span>`;

    // Remove error if region is selected
    removeError(dropdownHeader);
    dropdownList.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!dropdownHeader.contains(e.target) && !dropdownList.contains(e.target)) {
    dropdownList.classList.remove("active");
  }
});

uidInput.addEventListener("input", () => {
  const uid = uidInput.value;
  if (uid && !/^\d+$/.test(uid)) {
    // Check if UID is not a valid number (only digits)
    showError(uidInput);
  } else {
    removeError(uidInput);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if a region is selected
  if (!selectedRegionValue) {
    showError(dropdownHeader);
  } else {
    removeError(dropdownHeader);
  }

  // Check if UID is valid (should only contain digits)
  const uid = uidInput.value;
  if (!uid || !/^\d+$/.test(uid)) {
    showError(uidInput);
  } else {
    removeError(uidInput);
  }

  // If no errors, proceed with the logic
  if (selectedRegionValue && uid && /^\d+$/.test(uid)) {
    fetch(
      `https://info.freefireinfo.site/api/${selectedRegionValue.toLowerCase()}/${uid}?key=83848373993037`
    )
      .then((response) => response.json())
      .then((data) => {
        const userData = data.basicInfo;
        const guildData = data.clanBasicInfo;

        // Populate user data
        document.getElementById("nickname").innerText = userData.nickname;
        document.getElementById("badgeCnt").innerText = userData.badgeCnt;
        document.getElementById("createdAt").innerText = new Date(
          userData.createAt * 1000
        ).toLocaleDateString();
        document.getElementById("lastLoginAt").innerText = new Date(
          userData.lastLoginAt * 1000
        ).toLocaleString();
        document.getElementById("liked").innerText = userData.liked;
        document.getElementById("level").innerText = userData.level;

        // Populate guild data
        document.getElementById("guildName").innerText = guildData.clanName;
        document.getElementById("leaderName").innerText =
          guildData.clanLeaderName;
        document.getElementById("leaderUid").innerText =
          guildData.clanLeaderUid;
        document.getElementById("guildLevel").innerText = guildData.clanLevel;
        document.getElementById("currentMembers").innerText =
          guildData.memberNum;
        document.getElementById("maxMembers").innerText = guildData.capacity;

        // Show user data section
        userDataSection.style.display = "block";
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        alert("There was an error fetching the data.");
      });
  }
});
