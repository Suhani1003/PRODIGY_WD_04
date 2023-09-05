const apikey="eb9d49eeff0191a46a6245973de08efa";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";




// document.querySelector(".weather").style.display="block";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon= document.querySelector(".icon");
async function checkWeather(city){
    const response= await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data= await response.json();

        // console.log(data);
    
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    
    
        if(data.weather[0].main=="Clouds"){
        weatherIcon.src="/sounds/WeatherApp/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="/sounds/WeatherApp/clear.png";
            }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="/sounds/WeatherApp/rain.png";
            }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="/sounds/WeatherApp/drizzle.png";
            }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="/sounds/WeatherApp/mist.png";
            }
    
            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
    }
    }

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
