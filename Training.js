function f(x) {
    return -0.3 * x + 0.2;
}

class Point {
    constructor(x=random(-1, 1), y=random(-1, 1)) {
        this.inputs = [x, y, 1]
        let lineY = f(x);

        this.label = y > lineY ? 1 : -1;
    }

    pixelX() {
        return map(this.inputs[0], -1, 1, 0, width)
    }

    

    pixelY(y) {
        return map(this.inputs[1], -1, 1, height, 0)
    }

    show() {
        stroke(0)
        this.label === 1 ? fill(255): fill(0);
        let px = this.pixelX()
        let py = this.pixelY()
        ellipse(px, py, 32, 32)
    }
}