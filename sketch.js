let points = []
let perceptron;
let trainIndex = 0;

function setup() {
    createCanvas(800, 800)
    perceptron = new Perceptron(3);
    for(let i = 0; i < 100; i++) {
        points.push(new Point());
    }
}

function draw() {
    background(255);
    stroke(0);
    let p1 = new Point(-1, f(-1));
    let p2 = new Point(1, f(1));
    line(p1.pixelX(), p1.pixelY(), p2.pixelX(), p2.pixelY());

    p1 = new Point(-1, perceptron.guessY(-1));
    p2 = new Point(1, perceptron.guessY(1));
    line(p1.pixelX(), p1.pixelY(), p2.pixelX(), p2.pixelY());
    for(let point of points) {
        point.show();
    }

    for(let point of points) {
        // perceptron.train(point.inputs, point.label);
        let guess = perceptron.guess(point.inputs);
        if(guess === point.label) {
            fill(0, 255, 0)
        } else {
            fill(255, 0, 0)
        }
        noStroke();
        ellipse(point.pixelX(),point.pixelY(), 16,16 )
    }

    let point = points[trainIndex];
    perceptron.train(point.inputs, point.label)
    trainIndex++;
    if(trainIndex === points.length) {
        trainIndex = 0;
    }
}