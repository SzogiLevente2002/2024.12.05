const ball = document.getElementById('ball');
const container = document.getElementById('container');

let isBouncing = false;
let animationFrame;
let yPosition = 0;
let velocity = 5; // Kezdő sebesség
const gravity = 0.5; // Gravitáció mértéke
const bounceFactor = 0.4; // Visszapattanás mértéke

function bounce() {
    if (!isBouncing) return;

    yPosition += velocity;
    velocity += gravity;

    // Ha eléri az alját, pattogjon vissza
    if (yPosition + ball.offsetHeight >= container.offsetHeight) {
        yPosition = container.offsetHeight - ball.offsetHeight;
        velocity = -velocity * bounceFactor;

        // Ha a sebesség túl kicsi, állítsuk meg
        if (Math.abs(velocity) < 1) {
            isBouncing = false;
            return;
        }
    }

    ball.style.top = `${yPosition}px`;
    animationFrame = requestAnimationFrame(bounce);
}

container.addEventListener('mouseenter', () => {
    if (!isBouncing) {
        isBouncing = true;
        velocity = 5; // Resetelés
        bounce();
    }
});

container.addEventListener('mouseleave', () => {
    isBouncing = false;
    cancelAnimationFrame(animationFrame);
});
