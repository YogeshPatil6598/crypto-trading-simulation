// modules/api.js

const axios = require('axios');

const fetchCryptoPrice = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const price = response.data.bitcoin.usd;
        console.log("✅ Price fetched: $", price); // Log the price to verify
        return price;
    } catch (error) {
        console.error("❌ Error fetching price:", error.message);
        return null;
    }
};

module.exports = { fetchCryptoPrice };
