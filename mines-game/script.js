const numberOfBoxes = 9;
const numberOfBombs = 3; // Set number of bombs to 3
let score = 0;
let bombs = [];
let mines = [];
let gameOver = false;
let clickedBoxes = 0; // Count of clicked boxes

function initializeGame() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    score = 0;
    clickedBoxes = 0; // Reset clicked boxes count
    document.getElementById('score-value').innerText = score;
    gameOver = false;

    bombs = [];
    mines = [];
    const randomMines = new Set();

    // Randomly place bombs and mines
    while (randomMines.size < numberOfBombs) {
        randomMines.add(Math.floor(Math.random() * numberOfBoxes));
    }
    mines = Array.from(randomMines);

    for (let i = 0; i < numberOfBoxes; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute('data-index', i);
        box.addEventListener('click', handleBoxClick);
        gameBoard.appendChild(box);

        if (mines.includes(i)) {
            bombs.push(i);
        }
    }
}

function handleBoxClick(event) {
    if (gameOver) return;

    const box = event.target;
    const index = parseInt(box.getAttribute('data-index'));

    if (mines.includes(index)) {
        box.innerHTML = "💣"; // Bomb icon
        box.style.backgroundColor = "#F44336"; // Set bomb background color to red
        showGameOverPopup(false);
    } else {
        if (!box.classList.contains('clicked')) { // Check if box is already clicked
            box.classList.add('clicked');
            box.innerHTML = "💰"; // Gold mine icon
            score++;
            clickedBoxes++; // Increment clicked boxes count
            document.getElementById('score-value').innerText = score;

            // Check for victory
            checkVictory();
        }
    }
}

function checkVictory() {
    // Check if clicked boxes are all the gold mines
    if (clickedBoxes === numberOfBoxes - numberOfBombs) {
        showGameOverPopup(true);
    }
}

function showGameOverPopup(victory) {
    gameOver = true;
    const overlay = document.getElementById('overlay');
    const popupMessage = document.getElementById('popup-message');
    overlay.style.display = 'flex';

    if (victory) {
        popupMessage.innerText = "Congratulations! You won!";
    } else {
        popupMessage.innerText = "Game Over! You hit a bomb!";
        // Reveal all bombs
        revealBombs();
    }
}

function revealBombs() {
    const boxes = document.querySelectorAll('.box');
    mines.forEach(index => {
        boxes[index].innerHTML = "💣"; // Bomb icon
        boxes[index].style.backgroundColor = "#F44336"; // Red for bomb
    });
}

function restartGame() {
    document.getElementById('overlay').style.display = 'none';
    initializeGame();
}

// Initialize the game when the page loads
initializeGame();