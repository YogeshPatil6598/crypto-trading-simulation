// modules/buffer.js

class CircularBuffer {
    constructor(size) {
        this.buffer = new Array(size).fill(null);
        this.size = size;
        this.index = 0;
    }

    add(value) {
        this.buffer[this.index] = value;
        this.index = (this.index + 1) % this.size;
    }

    getBuffer() {
        return this.buffer.filter(val => val !== null);
    }

    getAverage() {
        const validValues = this.getBuffer();
        if (validValues.length === 0) return null;
        const sum = validValues.reduce((a, b) => a + b, 0);
        return sum / validValues.length;
    }
}

module.exports = { CircularBuffer };
