document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.querySelector('.input-box');
    const searchBtn = document.querySelector('#searchBtn');
    const weatherBody = document.querySelector('.weather-body');
    const locationNotFound = document.querySelector('.location-not-found');
    const temperatureElement = document.querySelector('.temperature');
    const descriptionElement = document.querySelector('.description');
    const humidityElement = document.getElementById('humidity');
    const windSpeedElement = document.getElementById('wind-speed');

    searchBtn.addEventListener('click', function () {
        const location = inputBox.value;
        const dummyWeatherData = {
            temperature: 25,
            description: 'clear sky',
            humidity: 65,
            windSpeed: 10
        };

        if (location === 'not found') {
            locationNotFound.style.display = 'flex';
            weatherBody.style.display = 'none';
        } else {
            locationNotFound.style.display = 'none';
            weatherBody.style.display = 'flex';

            // Update weather details
            temperatureElement.innerHTML = `${dummyWeatherData.temperature} <sup>°C</sup>`;
            descriptionElement.innerHTML = dummyWeatherData.description;
            humidityElement.innerHTML = `${dummyWeatherData.humidity}%`;
            windSpeedElement.innerHTML = `${dummyWeatherData.windSpeed}Km/H`;
        }
    });
});
