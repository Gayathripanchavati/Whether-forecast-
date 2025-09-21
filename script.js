// Mock weather data (instead of API)
const weatherData = {
  London: { temp: 18, desc: "Cloudy", humidity: 65, wind: 5 },
  Paris: { temp: 22, desc: "Sunny", humidity: 50, wind: 3 },
  Delhi: { temp: 30, desc: "Hot and Dry", humidity: 40, wind: 6 },
  Tokyo: { temp: 25, desc: "Rainy", humidity: 70, wind: 4 },
  Sydney: { temp: 20, desc: "Clear Sky", humidity: 55, wind: 5 }
};

function showWeather() {
  const cityInput = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!cityInput) {
    resultDiv.innerHTML = "<p>Please enter a city.</p>";
    return;
  }

  const city = cityInput.charAt(0).toUpperCase() + cityInput.slice(1).toLowerCase();

  if (weatherData[city]) {
    const data = weatherData[city];
    resultDiv.innerHTML = `
      <h2>${city}</h2>
      <p><strong>Temperature:</strong> ${data.temp} °C</p>
      <p><strong>Weather:</strong> ${data.desc}</p>
      <p><strong>Humidity:</strong> ${data.humidity}%</p>
      <p><strong>Wind:</strong> ${data.wind} m/s</p>
    `;
  } else {
    resultDiv.innerHTML = `<p>Sorry, no data available for "${cityInput}".</p>`;
  }
}
