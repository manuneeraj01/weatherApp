
const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.querySelector('.locationInput');
const search = document.querySelector('.search');
const btn =  document.querySelector('.submit');
const cities = document.querySelector('.cities');

let cityInput = "London";
cities.forEach((city)=>{
    city.addEventListener('click', (e) =>{
        cityInput = e.target.innerHTML;

        fetchWeatherData();
        app.style.opacity = "0";
    });
})

form.addEventListener('submit', (e) =>{
    if(search.value.length == 0){
        alert("Please type in a city name");
    }
    else{
        cityInput = search.value;
        fetchWeatherData();
        search.value = "";
        app.style.opacity = "0";
    }
    e.preventDefault();
});

function dayOfWeek(day, month, year){
    const weekDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thrusday",
        "Friday",
        "Saturday"
    ];
    return weekDay[new Date(`$(day)/$(month)/$(year)`).getDay()];
}

function fetchWeatherData(){
   


}