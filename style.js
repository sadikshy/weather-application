const apiKey = "dd93049c2f25c984ca5d2e4892eb6f09";
const searchInput = document.querySelector(".search input[type='text']");
const searchButton = document.querySelector(".search button");

        

async function fetchWeatherData(city) {

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
const response = await fetch(apiUrl);
const data = await response.json();

document.getElementById('send_data').addEventListener('click',()=>{
    viewdata(cityname);
})


document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
document.querySelector(".pressure").innerHTML = data.main.pressure + "pa";



const weatherCondition = data.weather[0].main;
}

function searchWeather() {
const city = searchInput.value.trim();
if (city !== "") {
fetchWeatherData(city);
searchInput.value = '';
} else {
alert("Please enter a city name.");
}
}

searchButton.addEventListener("click", searchWeather);
searchInput.addEventListener("keyup", function (event) {
if (event.key === "Enter") {
searchWeather();
}
});

function viewdata(cityname){
    console.log("VIEWDATA: Running")
    var form = document.createElement('form');
    form.method = 'POST';
    form.action = 'weather.php';

    var hiddenField = document.createElement('input');
    hiddenField.type = 'hidden';
    hiddenField.name = 'cityname';
    hiddenField.value = cityname;

    form.appendChild(hiddenField);
    document.body.appendChild(form);

    form.submit();

    document.body.removeChild(form);
}

fetchWeatherData("Edinburgh");



