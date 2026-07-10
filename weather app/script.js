const apiKey = "7a66d6833f972934eb9d9881beb4359e";
async function getWeather() {

    const city = document.getElementById("city").value;

    const weatherDiv = document.getElementById("weather");
    const error = document.getElementById("error");

    weatherDiv.innerHTML = "";
    error.innerHTML = "";

    if (city === "") {
        error.innerHTML = "Please enter a city";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        weatherDiv.innerHTML = `
            <h2>${data.name}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Weather:</strong> ${data.weather[0].main}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;

    } catch (err) {
        error.innerHTML = "Invalid city name!";
    }
}