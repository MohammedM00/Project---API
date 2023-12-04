const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const weatherContainer = $('#weather-container');
const loadingIndicator = $('#loading');

function getWeather() {
    const city = $('#city').val();

    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Show loading indicator
    loadingIndicator.show();

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            displayWeather(data);
        },
        error: function (error) {
            showError();
            console.error(error);
        },
        complete: function () {
            // Hide loading indicator after request is complete
            loadingIndicator.hide();
        }
    });
}

function displayWeather(data) {
    // Clear previous content
    weatherContainer.empty();

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    // Create a weather card dynamically
    const weatherCard = $('<div class="weather-card">')
        .append(`<h2>${cityName}</h2>`)
        .append(`<p>Temperature: ${temperature}°C</p>`)
        .append(`<p>Description: ${description}</p>`);

    // Append weather card to the container
    weatherContainer.append(weatherCard);
}

function showError() {
    // Display an error message
    weatherContainer.html('<p>Error fetching weather data. Please try again.</p>');
}
