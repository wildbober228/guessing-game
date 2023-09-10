class GuessingGame {
    low;
    great;
    result;
    constructor() {
        this.great = 0;
        this.low = 0;
        this.result = 0;
    }

    setRange(min, max) {
        this.great = max;
        this.low = min;
    }

    guess() {
        this.result = Math.ceil((this.great - this.low) / 2) + this.low;
        return this.result;
    }

    lower() {
        this.great = this.result;
    }

    greater() {
        this.low = this.result;
    }
}

module.exports = GuessingGame;
