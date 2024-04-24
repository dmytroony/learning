function generateRandomNumber() {
  return `Random number: ${Math.floor(Math.random() * 100 + 1)}`;
}

function celsiusToFahrenheit(celsius) {
  return `${celsius}°C = ${(celsius * 9) / 5 + 32}°F`;
}

// CommonJS built-in module system
// module.exports = generateRandomNumber;
module.exports = {
  generateRandomNumber,
  celsiusToFahrenheit,
};