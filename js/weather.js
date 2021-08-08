const API_KEY = "afde666504306cf045d0be31d3b1c667";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const weatherSpan = document.querySelector("#weather span.weather");
            const tempSpan = document.querySelector("#weather span.temp");
            const citySpan = document.querySelector("#weather span.city");
            console.log(weatherSpan, citySpan);
            const name = `@${data.name}`;
            const weather = data.weather[0].main;
            const currentTemp = `${data.main.temp}`;
            const minTemp = data.main.temp_min;
            const maxTemp = data.main.temp_max;
            const humidity = data.main.humidity;

            console.log(weather, name, currentTemp);

            weatherSpan.innerText = weather;
            tempSpan.innerText = currentTemp;
            citySpan.innerText = name;
        });
}
function onGeoError() {
    alert(
        "위치를 찾지 못하여 날씨를 표시할 수 없습니다. \n위치 정보 확인에 동의 해주세요 :)"
    );
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
