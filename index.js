console.log("🚀 Starting the Crypto Trading Simulation...");

const { fetchCryptoPrice } = require('./modules/api');
const { TradingBot } = require('./modules/tradingBot');

const main = async () => {
    const bot = new TradingBot();
    
    console.log("📊 Trading Bot Initialized...");

    setInterval(async () => {
        const price = await fetchCryptoPrice();
        if (price) bot.addPrice(price);
    }, 10000); // Fetch price every 5 seconds for testing.
};

main();
