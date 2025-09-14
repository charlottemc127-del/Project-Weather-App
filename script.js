function updateWeatherInfo(response) {
  let tempertureElement = document.querySelector("#weather-app-temperture");
  tempertureElement.innerHTML = response.data.temperture.current;
  let cityElement = document.querySelector("#weather-app-city");

  cityElement.innerHTML = response.data.city;
  tempertureElement.innerHTML = Math.round(temperture);
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

searchCity("Newcastle");
