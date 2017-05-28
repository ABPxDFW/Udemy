function setup() {
    createCanvas(600, 600);
    s = new Snake();
}

function draw() {
    background(51);
    s.update();
    s.show();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    }

    if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    }

    if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    }

    if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}


