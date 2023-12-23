const apikey = "535a86ee7c6f48cee89204df19a167c2";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";



const weathericon = document.querySelector(".weathericon")
const searchbox = document.getElementById('inp');

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h  Wind Speed";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "./cloud2.png";
            // weatherIconEl.classList.add("fa-solid","fa-cloud");
        }
        else if (data.weather[0].main == "Rain") {
            // weathericon.src = "rain.jfif";
            weathericon.src = "./rain2.png";
        }
        else if (data.weather[0].main == "Clear") {
            // weathericon.src = "clear.png";
            weathericon.src = "./clear2.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            // weathericon.src = "drizzle.png";
            weathericon.src = "./drizzle2.png";
        }
        else if (data.weather[0].main == "Mist") {
            // weathericon.src = "mist.png";
            weathericon.src = "./mist2.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

const handleSubmit = (event) =>  {
    event.preventDefault();
    checkweather(searchbox.value)
}


