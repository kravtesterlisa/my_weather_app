<script>
      function displayWeather(response) {
        let weatherDiv = document.querySelector("#weather");
        let temperature = Math.round(response.data.main.temp);
        let description = response.data.weather[0].description;

        weatherDiv.innerHTML = `It is ${temperature} degrees, ${description}, in ${
          response.data.name
        }`;
      }

      let city = "Rome";
      let key = "5f472b7acba333cd8a035ea85a0d4d4c";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

      axios.get(url).then(displayWeather);
    </script>