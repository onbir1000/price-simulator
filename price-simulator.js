// price-simulator.js
// Random token price simulator

function simulatePrice(base, volatility, steps) {
  let price = base;

  console.log("📈 Starting price:", price.toFixed(2));

  for (let i = 0; i < steps; i++) {
    const change = (Math.random() - 0.5) * volatility;
    price += price * change;
    console.log(`Step ${i + 1}: $${price.toFixed(2)}`);
  }

  console.log("✅ Simulation complete!");
}

simulatePrice(100, 0.1, 10);
