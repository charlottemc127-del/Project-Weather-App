function updateWeatherInfo(response) {
  let tempertureElement = document.querySelector("#weather-app-temperture");
  tempertureElement.innerHTML = response.data.temperature.current;
  let cityElement = document.querySelector("#weather-app-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#icon");

  icon.innerHTML = `<img  src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
  console.log(response.data);

  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  tempertureElement.innerHTML = Math.round(response.data.temperature.current);
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  timeElement.innerHTML = formatDate(date);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "04atba3fbfaf6of3a11828de020976f3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeatherInfo);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

function displayForcast() {
  let forcast = document.querySelector("#forcast");
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forcastHtml = "";

  days.forEach(function (day) {
    forcastHtml =
      forcastHtml +
      `
  <div class="weather-forcast-day">
    <div class="weather-forcast-date">${day}</div>
    <div class="weather-forcast-icon">☔</div>
    <div class="weather-forcast-temperatures">
      <span class="weather-forcast-temperature">
        <strong>15°C</strong>
      </span>
      <span class="weather-forcast-temperature"> 9°C</span>
    </div>
  </div>
`;
  });
  forcast.innerHTML = forcastHtml;
}
searchCity("Newcastle");
displayForcast();
