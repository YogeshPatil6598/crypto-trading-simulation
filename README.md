# Crypto Trading Simulation

## 📌 Overview
This application fetches live cryptocurrency prices from the CoinGecko API and simulates trades using Simple Moving Averages (SMA). It logs trade activities based on price comparisons with calculated SMAs.

## 🚀 Features
- Fetches real-time Bitcoin prices every 10 seconds (adjustable).
- Calculates a Simple Moving Average (SMA) of the last 5 prices.
- Logs simulated trades (BUY/SELL) based on price vs. SMA comparison.
- Handles API errors (like Too Many Requests).

## 📦 Installation
1. Clone the repository:
```bash
git clone https://github.com/YogeshPatil6598/crypto-trading-simulation.git

1.cd crypto-trading-simulation

2.npm install

3.node index.js


## Design Decisions
API Fetching: Using axios for making HTTP requests.
SMA Calculation: Using a simple moving average for comparison.
Error Handling: Logging errors and waiting before retrying.
Scalability: The code can be extended to support multiple cryptocurrencies.


### 📌 **4. Commit & Push README.md to GitHub**
```bash
git add README.md
git commit -m "Added README.md with instructions"
git push