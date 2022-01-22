document.getElementById('button-design').addEventListener('click',function(){
    const city = document.getElementById('location').value;
    const ApiKey = `9c51ab06c40589cf38dd9fa011924b54`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`;


    fetch(url)
    .then(response => response.json())
    .then(data => displayFunction(data))
})


const displayFunction = (data) =>{
    const kelvin = 273;
    console.log(data);
    const cityName = document.getElementById('city-name');
    cityName.innerText = data.name;
    const weatherDegree = document.getElementById('weather-degree');
    weatherDegree.innerText =Math.round(data.main.temp - kelvin);

    const weather = document.getElementById('weather');
    weather.innerText = data.weather[0].description;

    const icon = document.getElementById('icon');
    const url =`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    icon.setAttribute('src',url);

}

