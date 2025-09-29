let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let mode = '';

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

window.onload = () => {
  document.getElementById('mode-modal').style.display = 'flex';
};

// Set the game mode (easy or hard)
function setMode(selectedMode) {
  mode = selectedMode;
  document.getElementById('mode-modal').style.display = 'none';
  document.getElementById('game-board').classList.remove('hidden');
}

// Player's move
function makeMove(index) {
  if (board[index] !== '' || !gameActive || currentPlayer === 'O') return;

  board[index] = currentPlayer;
  document.getElementsByClassName('cell')[index].textContent = currentPlayer;

  setTimeout(() => {
    if (checkWinner()) {
      showResult('You Win!');
      return;
    }

    if (board.every(cell => cell !== '')) {
      showResult('Draw!');
      return;
    }

    currentPlayer = 'O';
    mode === 'easy' ? aiRandomMove() : aiHardMove();
  }, 200); // 0.2 seconds delay
}

// Easy mode: Random AI move
function aiRandomMove() {
  let availableCells = board.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
  let randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
  board[randomIndex] = 'O';
  document.getElementsByClassName('cell')[randomIndex].textContent = 'O';

  setTimeout(() => {
    if (checkWinner()) {
      showResult('You Lose!');
      return;
    }
    currentPlayer = 'X';
  }, 200); // 0.2 seconds delay
}

// Hard mode: Unbeatable AI using Minimax
function aiHardMove() {
  let bestMove = minimax(board, 'O').index;
  board[bestMove] = 'O';
  document.getElementsByClassName('cell')[bestMove].textContent = 'O';

  setTimeout(() => {
    if (checkWinner()) {
      showResult('You Lose!');
      return;
    }
    currentPlayer = 'X';
  }, 200); // 0.2 seconds delay
}

// Minimax algorithm for hard mode
function minimax(newBoard, player) {
  const availableSpots = newBoard.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);

  if (checkWinnerForPlayer(newBoard, 'X')) return { score: -10 };
  if (checkWinnerForPlayer(newBoard, 'O')) return { score: 10 };
  if (availableSpots.length === 0) return { score: 0 };

  const moves = [];
  
  for (let i = 0; i < availableSpots.length; i++) {
    let move = {};
    move.index = availableSpots[i];
    newBoard[availableSpots[i]] = player;

    if (player === 'O') {
      move.score = minimax(newBoard, 'X').score;
    } else {
      move.score = minimax(newBoard, 'O').score;
    }

    newBoard[availableSpots[i]] = '';
    moves.push(move);
  }

  let bestMove;
  if (player === 'O') {
    let bestScore = -Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}

// Check if there's a winner
function checkWinner() {
  for (let i = 0; i < winPatterns.length; i++) {
    const [a, b, c] = winPatterns[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      return true;
    }
  }
  return false;
}

// Check winner for Minimax (without UI update)
function checkWinnerForPlayer(newBoard, player) {
  for (let i = 0; i < winPatterns.length; i++) {
    const [a, b, c] = winPatterns[i];
    if (newBoard[a] === player && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
      return true;
    }
  }
  return false;
}

// Display the game result in an attractive dialog box
function showResult(message) {
  const resultModal = document.createElement('div');
  resultModal.className = 'result-modal';
  
  const resultContent = document.createElement('div');
  resultContent.className = 'result-content';
  
  const resultMessage = document.createElement('h2');
  resultMessage.textContent = message;
  resultContent.appendChild(resultMessage);
  
  const restartButton = document.createElement('button');
  restartButton.textContent = 'Restart';
  restartButton.onclick = restartGame;
  resultContent.appendChild(restartButton);
  
  resultModal.appendChild(resultContent);
  document.body.appendChild(resultModal);
}

// Restart the game
function restartGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
  const resultModal = document.querySelector('.result-modal');
  if (resultModal) {
    document.body.removeChild(resultModal);
  }
}

// Add CSS for the result modal
const style = document.createElement('style');
style.textContent = `
.result-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it appears on top */
}

.result-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  animation: scaleIn 0.3s ease forwards;
}

.result-content h2 {
  font-size: 2rem;
  color: #282c34;
  margin-bottom: 20px;
}

.result-content button {
  background-color: #61dafb;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

.result-content button:hover {
  background-color: #21a1f1;
}

@keyframes scaleIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
`;
document.head.appendChild(style);