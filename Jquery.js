// AJAX request using jQuery
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
