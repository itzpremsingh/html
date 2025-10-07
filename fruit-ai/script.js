// Fruit list
const fruits = [
  "abiu",
  "a\u00e7a\u00ed",
  "acerola",
  "ackee",
  "african breadfruit",
  "african cherry orange",
  "african cucumber",
  "african mango",
  "akebi",
  "alexandria strawberry",
  "alpine strawberry",
  "amanatsu orange",
  "amaou strawberry",
  "amara",
  "ambarella",
  "ambrosia apple",
  "ambrosia melon",
  "american mayapple",
  "amla",
  "annatto",
  "annona",
  "apple",
  "appleberry",
  "apricot",
  "aprium",
  "araca-boi",
  "arava melon",
  "araza",
  "aronia",
  "asam kumbang",
  "asian pear",
  "atemoya",
  "avocado",
  "babaco",
  "bacuri fruit",
  "bael",
  "banana",
  "barbadine",
  "barbados cherry",
  "barberry",
  "batuan",
  "beach plum",
  "bearberry",
  "bignay",
  "bilberry",
  "bilimbi",
  "biriba",
  "bitter gourd",
  "bitter melon",
  "black apple",
  "black cherry",
  "black currant",
  "black mulberry",
  "black raspberry",
  "black sapote",
  "blackberry",
  "blackcurrant",
  "blood lime",
  "blood orange",
  "blue passionfruit",
  "blueberry",
  "bolivian mountain coconut",
  "bottle gourd",
  "boysenberry",
  "bramble",
  "brazilian guava",
  "bread fruit",
  "breadfruit",
  "brush cherry",
  "buddha apple",
  "buddha\u2019s hand",
  "burdekin plum",
  "bushel and berry \u2018jelly bean\u2019 blueberry",
  "butter fruit",
  "cacao",
  "cactus pear",
  "calabash",
  "calamansi",
  "calamondin",
  "camu camu",
  "canistel",
  "cantaloupe",
  "cape gooseberry",
  "cara cara",
  "carambola",
  "carissa",
  "cascara",
  "cashew apple",
  "catmon",
  "caviar lime",
  "cawesh",
  "cedar bay cherry",
  "cempedak",
  "ceylon gooseberry",
  "changunga",
  "charichuelo",
  "chayote",
  "cherimoya",
  "cherry",
  "cherry plum",
  "chico fruit",
  "chocolate-fruit",
  "chokeberry",
  "chokecherry",
  "citrofortunella",
  "citron",
  "clementine",
  "cloudberry",
  "cluster fig",
  "cocky apple",
  "coco de mer",
  "coco plum",
  "coconut",
  "coffee cherry",
  "coffee fruit",
  "colonnade \u2018maypole\u2019 apple",
  "common apple berry",
  "conkerberry",
  "cornelian cherry",
  "crab apple",
  "craisin",
  "cranberry",
  "crowberry",
  "cucumber",
  "cumquat",
  "cupuacu",
  "currant",
  "custard apple",
  "dabai fruit",
  "damson",
  "damson plum",
  "dangle berry",
  "darling plum",
  "date",
  "date plum",
  "davidson\u2019s plum",
  "dead man\u2019s fingers",
  "decaisnea",
  "dekopon",
  "desert banana",
  "desert fig",
  "desert king fig",
  "desert lime",
  "desert quandong",
  "dewberry",
  "discovery apple",
  "dodder-laurel",
  "double coconut",
  "dracontomelon",
  "dragon fruit",
  "duku fruit",
  "durian",
  "early girl tomato",
  "early gold mango",
  "eastern hawthorn",
  "egg fruit",
  "eggplant",
  "elands sour fig",
  "elderberry",
  "elephant apple",
  "emblica",
  "emu apple",
  "emu berry",
  "entawak",
  "enterprise apple",
  "etrog",
  "european pear",
  "evergreen huckleberry",
  "fairchild tangerine",
  "falkland island cranberry",
  "falmouth gooseberry",
  "false mastic",
  "farkleberry",
  "fascell mango",
  "fazli mango",
  "fe\u2019i banana",
  "feijoa",
  "fibrous satinash",
  "fig",
  "filbert",
  "finger lime",
  "fingered citron",
  "five flavor berry",
  "flatwoods plum",
  "flavorfest strawberry",
  "florentine citron",
  "florida cherry",
  "florida strangler fig",
  "forest strawberry",
  "fox grape",
  "fuji apple",
  "fukushu kumquat",
  "fuyu persimmon",
  "fuzzy pear",
  "gac fruit",
  "gala apple",
  "galia melon",
  "gamboge",
  "genip",
  "giant granadilla",
  "goji berry",
  "golden apple",
  "golden kiwi",
  "golden raisins",
  "gooseberry",
  "gorham pear",
  "goumi",
  "governor\u2019s plum",
  "granadilla",
  "grand nain banana",
  "grape",
  "grapefruit",
  "grecian fig",
  "greek fig",
  "green anjou pear",
  "green apple",
  "greengage",
  "grenadier",
  "grewia asiatica",
  "ground plum",
  "groundcherry",
  "grumichama",
  "grumolo",
  "guan\u00e1bana",
  "guarana",
  "guava",
  "guavaberry",
  "hackberry",
  "hala fruit",
  "hardy kiwi",
  "haskap",
  "hawaiian mountain apple",
  "hawthorn berry",
  "hebesu",
  "heirloom tomato",
  "highbush blueberry",
  "highbush cranberry",
  "himalayan mulberry",
  "hog plum",
  "honey crisp apple",
  "honey locust",
  "honeyberry",
  "honeydew",
  "honeydew melon",
  "honeysuckle",
  "horned melon",
  "huckleberry",
  "huito",
  "husk tomato",
  "hyuganatsu",
  "iboga",
  "icacina",
  "icaco",
  "ice apple",
  "ice cream bean",
  "ichigo",
  "ilama",
  "illawarra plum",
  "imbe",
  "incaberry",
  "indian almond",
  "indian gooseberry",
  "indian jujube",
  "indian persimmon",
  "indian plum",
  "indian prune",
  "indian sherbet berry",
  "indonesian lime",
  "ita palm",
  "jaboticaba",
  "jackfruit",
  "jamaican tangelo",
  "jambolan",
  "jambul",
  "japanese plum",
  "jatoba",
  "java apple",
  "jazz apple",
  "jelly palm",
  "jocote",
  "joel bush cherry",
  "jostaberry",
  "jujube",
  "june plum",
  "junglesop",
  "juniper berry",
  "kabosu",
  "kaffir lime",
  "kakadu plum",
  "kaki",
  "kantola",
  "kanzi apple",
  "kapok",
  "karkalla",
  "karonda",
  "kaywa",
  "kei apple",
  "keitt mango",
  "kepel",
  "keule",
  "key lime",
  "kiwano",
  "kiwi",
  "knobby russet apple",
  "korean pear",
  "korlan",
  "koroi",
  "kumquat",
  "kutjera",
  "kwai muk",
  "kyoho grape",
  "lablab fruit",
  "lancetilla mango",
  "langra mango",
  "langsat",
  "le conte pear",
  "lebanese wild apple",
  "lemon",
  "lemon aspen fruit",
  "lemon drop mangosteen",
  "lemon drop melon",
  "lemonade berry",
  "liberty apple",
  "lilly pilly",
  "lime",
  "limeberry",
  "limequat",
  "lingonberry",
  "little gooseberry",
  "loganberry",
  "long\u2011peduncled almond",
  "longan",
  "loquat",
  "lovi-lovi",
  "low juneberry",
  "low serviceberry",
  "l\u00facuma",
  "lulo",
  "lu\u00f3h\u00e0n gu\u01d2",
  "lychee",
  "magellan barberry",
  "malabar plum",
  "malay rose apple",
  "malus sieversii",
  "mamey",
  "mamey apple",
  "mamey sapote",
  "mamin chino",
  "manchurian apricot",
  "manchurian cherry",
  "manchurian crab apple",
  "mandarine",
  "mangifera indica",
  "mango",
  "mangosteen",
  "manilkara elata",
  "maqui",
  "marionberry",
  "marula",
  "mayhaw",
  "maypop",
  "medlar",
  "melon",
  "mexican pitahaya",
  "mexican plum",
  "midgen berry",
  "mimusops elengi",
  "minneola tangelo",
  "miracle fruit",
  "miyama cherry",
  "mombin",
  "momordica fruit",
  "moriche palm fruit",
  "moro blood orange",
  "morus",
  "mountain serviceberry",
  "mouse melon",
  "mulberry",
  "muntingia calabura",
  "murray\u2019s plum",
  "murraya fruit",
  "musa ingens",
  "muscadine grape",
  "muskmelon",
  "myers plum",
  "naartjie",
  "nagami kumquat",
  "nageia",
  "nam dok mai",
  "nance",
  "naples fig",
  "naranjilla",
  "narenj",
  "nashi pear",
  "natal plum",
  "naval orange",
  "nectacot",
  "nectarine",
  "neem",
  "nepali hog plum",
  "nere fruit",
  "neroli",
  "newton pippin apple",
  "nocera grape",
  "noni",
  "nopal fruit",
  "northern spy apple",
  "nungu",
  "o\u2019henry peach",
  "oeillade noire grape",
  "ogallala strawberry",
  "ogden melon",
  "ogeechee lime",
  "oil palm",
  "okra",
  "okuzgozu grape",
  "olallieberry",
  "olive",
  "opal apple",
  "opal plum",
  "opo squash",
  "opuntia",
  "orange",
  "orangelo",
  "oregon grape",
  "orient melon",
  "orient pear",
  "oriental cherry",
  "orin apple",
  "orlando tangelo",
  "oroblanco",
  "ortanique",
  "osage orange",
  "oso grande strawberry",
  "osteen mango",
  "otaheite apple",
  "otaheite gooseberry",
  "oullins gage plum",
  "oval kumquat",
  "ozark beauty strawberry",
  "ozark gold apple",
  "pacific rose apple",
  "palestinian sweet lime",
  "papaya",
  "parsonage pear",
  "passionfruit",
  "pawpaw",
  "peach",
  "peach palm fruit",
  "peanut butter fruit",
  "pear",
  "pepino melon",
  "pequi",
  "persian lime",
  "persimmon",
  "peruvian groundcherry",
  "petit manseng grape",
  "petit rouge grape",
  "peumo",
  "pf lucky 13 flamin\u2019 fury peach",
  "physalis",
  "pickering mango",
  "picual olive",
  "pigeon pea",
  "pigeon plum",
  "pigface fruit",
  "pineapple",
  "pineberry",
  "pink banana",
  "pink lady apple",
  "pink lemonade blueberry",
  "pink pearl apple",
  "pinot noir grape",
  "pinova apple",
  "pitaya",
  "plantain",
  "plum",
  "plumcot",
  "pluot",
  "pomato fruit",
  "pomegranate",
  "pomelo",
  "ponderosa lemon",
  "ponkan fruit",
  "poorman orange",
  "prickly pear",
  "prime ark freedom blackberry",
  "prune",
  "pulasan",
  "pummelo",
  "purple mangosteen",
  "quandong",
  "quararibea cordata",
  "queen anne\u2019s cherry",
  "queen tahiti pineapple",
  "queen\u2019s forelle pear",
  "quenepa",
  "querina apple",
  "quinault strawberry",
  "quince",
  "raisin",
  "rajka apple",
  "rambai",
  "rambutan",
  "ramontchi",
  "rangpur lime",
  "raspberry",
  "raspuri mango",
  "rata",
  "red banana",
  "red bayberry",
  "red delicious apple",
  "red grape",
  "red huckleberry",
  "red mombin",
  "red mulberry",
  "redcurrant",
  "rhobs el arsa",
  "rhubarb",
  "riberry",
  "rocha pear",
  "rockmelon",
  "rollinia",
  "rombo",
  "rose apple",
  "rose hip",
  "roselle",
  "rosigold mango",
  "rough lemon",
  "rubus parviflorus",
  "rumdul",
  "safou",
  "saigon mango",
  "salak",
  "salak",
  "salal",
  "salal berry",
  "salmonberry",
  "sand cherry",
  "santol",
  "sapodilla",
  "sapote",
  "sarvisberry",
  "sassafras",
  "satsuma",
  "sea buckthorn",
  "seagrape",
  "serviceberry",
  "seville orange",
  "sharon",
  "shine muscat",
  "shonan gold",
  "silky oak apple",
  "sloe",
  "snake fruit",
  "soncoya",
  "sour cherry",
  "soursop",
  "spanish lime",
  "spanish tamarind",
  "splendor apple",
  "star apple",
  "starfruit",
  "strawberry guava",
  "stinking bishop pear",
  "strawberry",
  "strawberry guava",
  "sugar apple",
  "sugar baby watermelon",
  "sugar palm",
  "sultana",
  "sumo orange",
  "sunda plum",
  "surinam cherry",
  "sweet dakota rose watermelon",
  "sweet lime",
  "sweet pepper",
  "tachibana orange",
  "tamarillo",
  "tamarind",
  "tangelo",
  "tangerillo",
  "tangerine",
  "tangerinequat",
  "tangor",
  "tarap",
  "tarpan strawberry",
  "tart cherry",
  "tawa-tawa",
  "tayberry",
  "tepin pepper",
  "terap",
  "texas persimmon",
  "thimbleberry",
  "thorn apple",
  "thornberry",
  "thornless blackberry",
  "thornless loganberry",
  "thumbelina apple",
  "tieguanyin",
  "tindora",
  "tomato",
  "tomato berry",
  "tomato cherry",
  "tomato plum",
  "tompkins king apple",
  "topaz apple",
  "toronja",
  "torpedo melon",
  "totapuri mango",
  "tree tomato",
  "tropical apricot",
  "tucuma",
  "tuna fruit",
  "tung berry",
  "tungfruit",
  "ububese",
  "udara",
  "ugli fruit",
  "ugni",
  "ugni blanc grape",
  "ugni molinae",
  "ukranian heart tomato",
  "ula",
  "umari",
  "umbrafruit",
  "umbrella squash",
  "umbu",
  "ume",
  "ume plums",
  "urava",
  "usakhelauri",
  "usama",
  "utu",
  "uva rara grape",
  "uva tosca grape",
  "uvalino grape",
  "uvaria",
  "uvilla",
  "vaccarese grape",
  "valencia orange fruit",
  "valencia pride mango",
  "van dyke mango",
  "vanilla fruit",
  "velvet apple",
  "velvet tamarind",
  "vernaccia grape",
  "vespolina grape",
  "vicar of winkfield pear",
  "victoria plum",
  "vitis vinifera",
  "voavanga",
  "volkamer lemon",
  "water apple",
  "watermelon",
  "wax gourd",
  "white aspen fruit",
  "white currant",
  "white mulberry",
  "white sapote",
  "wintermelon",
  "wolf berry",
  "wood apple",
  "xanthium",
  "xaoy",
  "xarel\u00b7lo",
  "xiangjiao",
  "xigua",
  "xilacayota squash",
  "ximenia",
  "xing zi",
  "xinomavro",
  "xo\u00e0i",
  "xoconostle",
  "xylocarpus granatum",
  "yaca",
  "yali pear",
  "yangmei fruit",
  "yellow dragon fruit",
  "yellow grape",
  "yellow guava",
  "yellow himalayan raspberry",
  "yellow passion fruit",
  "yellow pear tomato",
  "yellow plum",
  "yellow sapote",
  "yellow squash",
  "yellow watermelon",
  "yemenite citron",
  "york imperial apple",
  "young mango",
  "youngberry",
  "yumberry",
  "yunnan hackberry fruit",
  "yuzu",
  "zabergay reinette apple",
  "zalzalak",
  "zante currant",
  "zarzamora",
  "zawngtah",
  "zebra melon",
  "zhe fruit",
  "ziga zag tree vine",
  "zinfandel grape",
  "ziziphus jujube fruit",
  "zucchini",
  "zwetschge",
];

// Create floating fruits
const floatingFruitsContainer = document.getElementById("floatingFruits");
const fruitIcons = [
  "🍎",
  "🍌",
  "🍍",
  "🍊",
  "🍓",
  "🫐",
  "🍇",
  "🍉",
  "🥝",
  "🥭",
  "🍑",
  "🍒",
];

function createFloatingFruits() {
  // Clear existing fruits
  floatingFruitsContainer.innerHTML = "";

  // Calculate how many fruits to create based on screen size
  const fruitCount = Math.min(15, Math.floor(window.innerWidth / 50));

  for (let i = 0; i < fruitCount; i++) {
    const fruit = document.createElement("div");
    fruit.className = "fruit";
    fruit.textContent =
      fruitIcons[Math.floor(Math.random() * fruitIcons.length)];
    fruit.style.left = `${Math.random() * 100}%`;
    fruit.style.top = `${Math.random() * 100}%`;
    fruit.style.animationDuration = `${15 + Math.random() * 20}s`;
    fruit.style.fontSize = `${1 + Math.random() * 1.5}rem`;
    floatingFruitsContainer.appendChild(fruit);
  }
}

// Initial creation of floating fruits
createFloatingFruits();

// Update floating fruits on resize
window.addEventListener("resize", createFloatingFruits);

// Levenshtein Distance function
function levenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );
  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[a.length][b.length];
}

// Get best matches
function getBestMatches(word) {
  const topDistance = {};
  fruits.forEach((fruit) => {
    const dist = levenshtein(word.toLowerCase(), fruit.toLowerCase());
    if (!topDistance[dist]) topDistance[dist] = [];
    // Avoid duplicates
    if (!topDistance[dist].includes(fruit)) {
      topDistance[dist].push(fruit);
    }
  });
  return topDistance;
}

// UI Elements
const input = document.getElementById("fruitInput");
const resultsDiv = document.getElementById("results");
const suggestionsDiv = document.getElementById("suggestions");
const checkBtn = document.getElementById("checkBtn");
const clearBtn = document.getElementById("clearBtn");

// Input event for suggestions
let inputTimeout;
input.addEventListener("input", () => {
  // Clear previous timeout
  clearTimeout(inputTimeout);

  // Set new timeout to avoid too frequent updates
  inputTimeout = setTimeout(() => {
    const val = input.value.trim().toLowerCase();
    if (!val) {
      suggestionsDiv.innerHTML = "";
      suggestionsDiv.style.display = "none";
      return;
    }

    const matches = fruits
      .filter((f) => f.toLowerCase().includes(val))
      .slice(0, 5);

    if (matches.length > 0) {
      suggestionsDiv.innerHTML = matches.map((f) => `<p>${f}</p>`).join("");
      suggestionsDiv.style.display = "block";
    } else {
      suggestionsDiv.innerHTML = "";
      suggestionsDiv.style.display = "none";
    }
  }, 150);
});

// Suggestion click event
suggestionsDiv.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    input.value = e.target.textContent;
    suggestionsDiv.innerHTML = "";
    suggestionsDiv.style.display = "none";
    // Trigger input event to update suggestions
    input.dispatchEvent(new Event("input"));
  }
});

// Hide suggestions when clicking outside
document.addEventListener("click", (e) => {
  if (!input.contains(e.target) && !suggestionsDiv.contains(e.target)) {
    suggestionsDiv.style.display = "none";
  }
});

// Check button event
checkBtn.addEventListener("click", () => {
  const val = input.value.trim();
  resultsDiv.innerHTML = "";

  if (!val) {
    resultsDiv.innerHTML = `
          <div class="no-results">
            <i class="fas fa-exclamation-circle"></i> Please enter a fruit name to check
          </div>
        `;
    return;
  }

  // Show loading state
  const originalText = checkBtn.innerHTML;
  checkBtn.innerHTML = '<span class="spinner"></span> Checking...';
  checkBtn.disabled = true;

  // Simulate processing time for better UX
  setTimeout(() => {
    const matches = getBestMatches(val);
    const labels = {
      0: { text: "Exact Match", icon: "fas fa-check" },
      1: { text: "Small Typo", icon: "fas fa-spell-check" },
      2: { text: "Close Match", icon: "fas fa-exchange-alt" },
      3: { text: "Similar Fruit", icon: "fas fa-search" },
    };

    let hasResults = false;

    Object.keys(labels).forEach((dist) => {
      if (matches[dist] && matches[dist].length > 0) {
        hasResults = true;
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "result-category";
        categoryDiv.innerHTML = `
              <h3><i class="${labels[dist].icon}"></i> ${labels[dist].text}</h3>
              <div>
                ${matches[dist]
                  .map((fruit) => `<span class="fruit-badge">${fruit}</span>`)
                  .join("")}
              </div>
            `;
        resultsDiv.appendChild(categoryDiv);
      }
    });

    if (!hasResults) {
      resultsDiv.innerHTML = `
            <div class="no-results">
              <i class="fas fa-question-circle"></i> No matching fruits found. Try a different spelling.
            </div>
          `;
    }

    // Restore button state
    checkBtn.innerHTML = originalText;
    checkBtn.disabled = false;
  }, 500);
});

// Clear button event
clearBtn.addEventListener("click", () => {
  input.value = "";
  suggestionsDiv.innerHTML = "";
  suggestionsDiv.style.display = "none";
  resultsDiv.innerHTML = "";
  input.focus();
});

// Enter key support
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkBtn.click();
  }
});

// Handle page visibility change
document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    // Page is visible again, refresh floating fruits
    createFloatingFruits();
  }
});

// Initialize with focus on input
input.focus();
