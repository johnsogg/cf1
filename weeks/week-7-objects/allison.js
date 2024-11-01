class Ball {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
}

const balls = [];

for (let i = 0; i < 10; i++) {
    balls.push(new Ball(i, i + 3, 'red'));
}

console.log(balls);