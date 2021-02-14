    // Hello message 
    // let firstName = prompt("Hello! What is your name?");

    // if (firstName !== null){
    // alert("Welcome!" + '' + firstName);
    // }
    //      else {
    //     alert("Too bad for you");}


   
  

/*let city_list = {
  "paris": {
    temp: 19.7,
    humidity: 80
  },
  "tokyo": {
    temp: 17.3,
    humidity: 50
  },
  "lisbon": {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  "moscow": {
    temp: -5,
    humidity: 20
  }
};

 // input your city 

let city_name = prompt ("Which city are you from?");
let weather_link = 'https://www.google.com/search?q=weather+sydney';
            city_name = city_name.toLowerCase();
            if (city_list.hasOwnProperty(city_name)) {
              let city_data = city_list[city_name]
                alert(`It is currently ${city_data.temp}°C (${toFarenheit(city_data.temp)}°F) in ${city_name} with a humidity of ${city_data.humidity}%`)
            } else {
              alert('Sorry, we don not know the weather for this city, try going to this ' + weather_link);
            }
 
            // alert(sorry, we cannot found your city, look in "https://google.weather.com");

function toFarenheit(celsiusDegree) {
  return celsiusDegree * 9 / 5 + 32
}*/
  

// current day + time 

  let today = new Date();
  let day = today.getDay();
  let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let current_time = (daylist[0] + " " + hour + ":" + minutes);
  console.log(current_time);

// current day + time is displaying  in id=show_time" -- doesn't work =(

let position = document.querySelector("#show_time");
console.log(position);
position.innerHTML = current_time;


// city's name is displayed on web 



/*function showTemperature(event) {
  event.preventDefault();
  let monday = document.querySelector("button");
  monday.innerHTML = "18 degrees";
}

let button = document.querySelector("button");
button.addEventListener("click", showTemperature);*/







