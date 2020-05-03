class Perceptron {
    constructor(size) {
        this.weights = [];
        this.size = size;
        this.lr = 0.1
        this.bias = 1;
        for(let i = 0; i < this.size; i++) {
            this.weights.push(random(-1,1));
        }
    }

    guessY(x) {
        let m = this.weights[0] / this.weights[1];
        let b = this.weights[2] / this.weights[1];
        return - b - m * x;

    }

    guess(inputs) {
        let sum = 0;
        for(let i = 0; i < this.size; i++) {
            sum += this.weights[i] * inputs[i];
        }        
        return this.sign(sum);
    }

    train(inputs, target) {
        let guessVal = this.guess(inputs);
        let error = target - guessVal;

        for(let i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * inputs[i] * this.lr
        }
    }

    sign(n) {
        return n > 0 ? 1 : -1;
    }
}