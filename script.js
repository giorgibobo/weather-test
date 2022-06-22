const tempDOM = document.getElementById("temp");
const formDOM = document.getElementById("form");
const cityDOM = document.getElementById("city");
const windDOM = document.getElementById("wind");
const mainDOM = document.getElementById("main");



/* fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cbc6fb630758c10a0e94539ef10ca683&units=metric`)
.then(res => res.json())
.then(data => {
    tempDOM.textContent = data.main.temp
}); */

const weatherAPP = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cbc6fb630758c10a0e94539ef10ca683&units=metric`)
    const result = await response.json();
    tempDOM.textContent = result.main.temp;
    windDOM.textContent = result.wind.speed;
    windDOM.innerText = result.wind.speed + " km/h";
    tempDOM.innerText = result.main.temp + " C";
    mainDOM.textContent = result.weather[0].description;
}


formDOM.addEventListener("submit", e =>{
    e.preventDefault();
    if(cityDOM.value){
        weatherAPP(cityDOM.value);
    }
})

