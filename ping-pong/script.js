const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  const width = Math.min(window.innerWidth * 0.9, 600);
  const height = Math.min(window.innerWidth * 0.5, 400);
  canvas.width = width;
  canvas.height = height;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 70;
const BALL_RADIUS = 8;

let leftY = canvas.height / 2 - PADDLE_HEIGHT / 2;
let rightY = canvas.height / 2 - PADDLE_HEIGHT / 2;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 4;
let ballSpeedY = 3;
let leftScore = 0;
let rightScore = 0;
let upPressed = false, downPressed = false, wPressed = false, sPressed = false;
let running = true;

// Touch/mouse for right paddle
let dragging = false;

function draw() {
  // Clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Field
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Middle line
  ctx.setLineDash([8, 8]);
  ctx.strokeStyle = "#00e676";
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  ctx.setLineDash([]);

  // Scores
  ctx.font = "bold 28px 'Segoe UI', Arial";
  ctx.fillStyle = "#00e676";
  ctx.textAlign = "center";
  ctx.fillText(leftScore, canvas.width / 4, 40);
  ctx.fillText(rightScore, canvas.width * 3 / 4, 40);

  // Paddles
  ctx.fillStyle = "#fff";
  ctx.fillRect(18, leftY, PADDLE_WIDTH, PADDLE_HEIGHT);
  ctx.fillRect(canvas.width - 18 - PADDLE_WIDTH, rightY, PADDLE_WIDTH, PADDLE_HEIGHT);

  // Ball
  ctx.beginPath();
  ctx.arc(ballX, ballY, BALL_RADIUS, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.shadowColor = "#00e676";
  ctx.shadowBlur = 10;
  ctx.fill();
  ctx.shadowBlur = 0;
}

function update() {
  if (!running) return;
  // Left paddle movement
  if (wPressed || upPressed) leftY -= 6;
  if (sPressed || downPressed) leftY += 6;
  leftY = Math.max(0, Math.min(canvas.height - PADDLE_HEIGHT, leftY));

  // Ball movement
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Top/bottom bounce
  if (ballY - BALL_RADIUS < 0 || ballY + BALL_RADIUS > canvas.height) ballSpeedY *= -1;

  // Left paddle collision
  if (
    ballX - BALL_RADIUS < 18 + PADDLE_WIDTH &&
    ballY > leftY &&
    ballY < leftY + PADDLE_HEIGHT
  ) {
    ballSpeedX *= -1;
    ballX = 18 + PADDLE_WIDTH + BALL_RADIUS;
    ballSpeedY += (Math.random() - 0.5) * 2;
  }

  // Right paddle collision
  if (
    ballX + BALL_RADIUS > canvas.width - 18 - PADDLE_WIDTH &&
    ballY > rightY &&
    ballY < rightY + PADDLE_HEIGHT
  ) {
    ballSpeedX *= -1;
    ballX = canvas.width - 18 - PADDLE_WIDTH - BALL_RADIUS;
    ballSpeedY += (Math.random() - 0.5) * 2;
  }

  // Score left
  if (ballX - BALL_RADIUS < 0) {
    rightScore++;
    resetBall();
  }
  // Score right
  if (ballX + BALL_RADIUS > canvas.width) {
    leftScore++;
    resetBall();
  }
  draw();
  requestAnimationFrame(update);
}

function resetBall() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = (Math.random() > 0.5 ? 4 : -4);
  ballSpeedY = (Math.random() > 0.5 ? 3 : -3);
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowUp') upPressed = true;
  if (e.code === 'ArrowDown') downPressed = true;
  if (e.key.toLowerCase() === 'w') wPressed = true;
  if (e.key.toLowerCase() === 's') sPressed = true;
});
document.addEventListener('keyup', (e) => {
  if (e.code === 'ArrowUp') upPressed = false;
  if (e.code === 'ArrowDown') downPressed = false;
  if (e.key.toLowerCase() === 'w') wPressed = false;
  if (e.key.toLowerCase() === 's') sPressed = false;
});

// Touch for right paddle (mobile)
canvas.addEventListener('touchstart', function(e) {
  dragging = true;
});
canvas.addEventListener('touchend', function(e) {
  dragging = false;
});
canvas.addEventListener('touchmove', function(e) {
  if (dragging && e.touches.length === 1) {
    const touchY = e.touches[0].clientY - canvas.getBoundingClientRect().top;
    rightY = touchY - PADDLE_HEIGHT / 2;
    rightY = Math.max(0, Math.min(canvas.height - PADDLE_HEIGHT, rightY));
  }
}, {passive: false});
// Mouse drag for right paddle (desktop)
canvas.addEventListener('mousedown', function(e) {
  dragging = true;
});
canvas.addEventListener('mouseup', function(e) {
  dragging = false;
});
canvas.addEventListener('mousemove', function(e) {
  if (dragging) {
    const mouseY = e.clientY - canvas.getBoundingClientRect().top;
    rightY = mouseY - PADDLE_HEIGHT / 2;
    rightY = Math.max(0, Math.min(canvas.height - PADDLE_HEIGHT, rightY));
  }
});

document.getElementById('restartBtn').onclick = function() {
  leftScore = rightScore = 0;
  resetBall();
  leftY = rightY = canvas.height / 2 - PADDLE_HEIGHT / 2;
  running = true;
  update();
};

canvas.focus();
draw();
update();