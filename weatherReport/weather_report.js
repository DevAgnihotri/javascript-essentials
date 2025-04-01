function showweatherDetails(event) {
    event.preventDefault();     //Above code prevents the default behavior of an event, such as form submission, within a function named showweatherDetails.

    const city = document.getElementById('city').value;
    const apiKey = 'd6de986ea2007779b0ae517d58a31132';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}';
}

fetch(url)
    .then(response => response.json())  //converting in JSON
    .then(data => {
        console.log(response);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}
                                <p>Temperature: ${data.main.temp}  &#8451;
                                <p>Weather: ${data.weather[0].description} </p>`;
    })

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );