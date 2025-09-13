const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

// Paddle settings
const PADDLE_WIDTH = 12;
const PADDLE_HEIGHT = 100;
const PADDLE_MARGIN = 20;
const PLAYER_X = PADDLE_MARGIN;
const AI_X = WIDTH - PADDLE_MARGIN - PADDLE_WIDTH;

// Ball settings
const BALL_SIZE = 16;
const BALL_SPEED = 5;

// Game objects
let playerY = HEIGHT / 2 - PADDLE_HEIGHT / 2;
let aiY = HEIGHT / 2 - PADDLE_HEIGHT / 2;

let ball = {
  x: WIDTH / 2 - BALL_SIZE / 2,
  y: HEIGHT / 2 - BALL_SIZE / 2,
  vx: BALL_SPEED * (Math.random() < 0.5 ? 1 : -1),
  vy: BALL_SPEED * (Math.random() * 2 - 1)
};

// Mouse control for player paddle
canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseY = e.clientY - rect.top;
  playerY = mouseY - PADDLE_HEIGHT / 2;
  playerY = Math.max(0, Math.min(HEIGHT - PADDLE_HEIGHT, playerY));
});

// Simple AI for right paddle
function updateAI() {
  const aiCenter = aiY + PADDLE_HEIGHT / 2;
  if (aiCenter < ball.y + BALL_SIZE / 2 - 8) {
    aiY += 5;
  } else if (aiCenter > ball.y + BALL_SIZE / 2 + 8) {
    aiY -= 5;
  }
  aiY = Math.max(0, Math.min(HEIGHT - PADDLE_HEIGHT, aiY));
}

// Ball movement and collision
function updateBall() {
  ball.x += ball.vx;
  ball.y += ball.vy;

  // Top and bottom wall collision
  if (ball.y <= 0 || ball.y + BALL_SIZE >= HEIGHT) {
    ball.vy *= -1;
    ball.y = Math.max(0, Math.min(HEIGHT - BALL_SIZE, ball.y));
  }

  // Left paddle collision
  if (
    ball.x <= PLAYER_X + PADDLE_WIDTH &&
    ball.x >= PLAYER_X &&
    ball.y + BALL_SIZE > playerY &&
    ball.y < playerY + PADDLE_HEIGHT
  ) {
    ball.vx = Math.abs(ball.vx);
    // Add a bit of randomness and paddle influence
    ball.vy += ((ball.y + BALL_SIZE / 2) - (playerY + PADDLE_HEIGHT / 2)) * 0.15;
  }

  // Right paddle collision
  if (
    ball.x + BALL_SIZE >= AI_X &&
    ball.x + BALL_SIZE <= AI_X + PADDLE_WIDTH &&
    ball.y + BALL_SIZE > aiY &&
    ball.y < aiY + PADDLE_HEIGHT
  ) {
    ball.vx = -Math.abs(ball.vx);
    ball.vy += ((ball.y + BALL_SIZE / 2) - (aiY + PADDLE_HEIGHT / 2)) * 0.15;
  }

  // Left or right wall (reset ball)
  if (ball.x < 0 || ball.x > WIDTH) {
    resetBall();
  }
}

function resetBall() {
  ball.x = WIDTH / 2 - BALL_SIZE / 2;
  ball.y = HEIGHT / 2 - BALL_SIZE / 2;
  ball.vx = BALL_SPEED * (Math.random() < 0.5 ? 1 : -1);
  ball.vy = BALL_SPEED * (Math.random() * 2 - 1);
}

// Draw everything
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  // Draw net
  ctx.strokeStyle = "#fff";
  ctx.setLineDash([10, 14]);
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2, 0);
  ctx.lineTo(WIDTH / 2, HEIGHT);
  ctx.stroke();
  ctx.setLineDash([]);

  // Draw paddles
  ctx.fillStyle = "#fff";
  ctx.fillRect(PLAYER_X, playerY, PADDLE_WIDTH, PADDLE_HEIGHT);
  ctx.fillRect(AI_X, aiY, PADDLE_WIDTH, PADDLE_HEIGHT);

  // Draw ball
  ctx.fillStyle = "#f5c518";
  ctx.fillRect(ball.x, ball.y, BALL_SIZE, BALL_SIZE);
}

// Main loop
function loop() {
  updateAI();
  updateBall();
  draw();
  requestAnimationFrame(loop);
}

loop();
