class MyThing {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    sayStuff() {
        console.log("Heyo:", this.x, this.y);
    }
}

let t = new MyThing(50, 100);
t.sayStuff();

function makeGaga(x, y) {
    return {
        x: x,
        y: y,
        sayStuff() {
            console.log("I am a Gaga with: ", this.x, this.y);
        }
    }
}

let g = makeGaga(70, 133);
g.sayStuff();