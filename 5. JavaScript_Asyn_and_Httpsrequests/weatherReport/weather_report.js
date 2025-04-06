function showweatherDetails(event) {
    event.preventDefault();     //Above code prevents the default behavior of an event, such as form submission, within a function named showweatherDetails.

    const city = document.getElementById('city').value;
    const apiKey = 'd6de986ea2007779b0ae517d58a31132';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
    .then(response => response.json())  //converting in JSON
    .then(data => {
        console.log(data);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                    <p>Temperature in &#8451: ${(data.main.temp - 273).toFixed(2)}  &#8451;</p>
                    <p>Temperature in &#8457: ${data.main.temp}  &#8457;</p>
                    <p>Weather: ${data.weather[0].description} </p> 
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width="100px" height="100px" alt="">`; // result generated is in array format 
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again. Properly this time</p>`;
      });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
