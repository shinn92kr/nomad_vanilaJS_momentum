const API_KEY = "afde666504306cf045d0be31d3b1c667";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log("You live in ", lat, lon);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const citySpan = document.querySelector(
                "#weather span:first-child"
            );
            const weatherSpan = document.querySelector(
                "#weather span:last-child"
            );
            const name = data.name;
            const weather = data.weather[0].main;
            const currentTemp = data.main.temp;
            const minTemp = data.main.temp_min;
            const maxTemp = data.main.temp_max;
            const humidity = data.main.humidity;

            citySpan.innerText = name;
            weatherSpan.innerText = weather;
        });
}
function onGeoError() {
    alert("Cam't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
