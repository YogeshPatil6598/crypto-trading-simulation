// modules/tradingBot.js

class TradingBot {
    constructor() {
        this.prices = [];
        this.smaPeriod = 5;  // Adjust as per your requirement
    }

    addPrice(price) {
        this.prices.push(price);
        
        if (this.prices.length > this.smaPeriod) {
            this.prices.shift();  // Maintain only the latest `smaPeriod` prices
        }

        this.checkForTrade(price);
    }

    calculateSMA() {
        if (this.prices.length < this.smaPeriod) return null;

        const sum = this.prices.reduce((acc, val) => acc + val, 0);
        return sum / this.prices.length;
    }

    checkForTrade(price) {
        const sma = this.calculateSMA();
        if (sma) {
            console.log(`📈 Current Price: $${price} | SMA: $${sma.toFixed(2)}`);
            
            if (price > sma) {
                console.log(`💰 Trade Executed: BUY at $${price}`);
            } else if (price < sma) {
                console.log(`📉 Trade Executed: SELL at $${price}`);
            }
        }
    }
}

module.exports = { TradingBot };
