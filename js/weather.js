const inputField = document.getElementById("city");
const searchButton = document.getElementById("search-btn");


  async function loadWeatherData(city) {
    const apiKey = "3015f131a36ec4ea516a894a578620d6";
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(api);

    const invalidMessage = document.getElementById('invalid');
    if(response.status === 404){       
        invalidMessage.classList.remove('hidden');
        invalidMessage.classList.add('block')
        document.getElementById('info').classList.remove('block');
        document.getElementById('info').classList.add('hidden');
        return;
    }
    else{
    document.getElementById('info').classList.remove('hidden');
    document.getElementById('info').classList.add('block');
    invalidMessage.classList.remove('block')
    invalidMessage.classList.add('hidden');
    var data = await response.json();
    console.log(data);  

    const temp = Math.round(data.main.temp);
    const cityName = data.name;
    const humidity = data.main.humidity;
    const feelsLike = Math.round(data.main.feels_like);
    const windSpeed = data.wind.speed;
    const weatherType = data.weather[0].main;
    
    document.getElementById('temp').innerText = temp;
    document.getElementById('city-name').innerText = cityName;
    document.getElementById('humidity').innerText = humidity;
    document.getElementById('feels-like').innerText = feelsLike;
    document.getElementById('wind-speed').innerText = windSpeed;
    document.getElementById('weather-type').innerText = weatherType;

    if(weatherType === 'Clear'){
        document.getElementById('weather-image').src = '../images/clear.png'
    }
    else if(weatherType === 'Clouds' || weatherType === 'Haze'){
        document.getElementById('weather-image').src = '../images/clouds.png'
    }
    else if(weatherType === 'Drizzle'){
        document.getElementById('weather-image').src = '../images/drizzle.png'
    }
    else if(weatherType === 'Mist'){
        document.getElementById('weather-image').src = '../images/mist.png'
    }
    else if(weatherType === 'Rain'){
        document.getElementById('weather-image').src = '../images/rain.png'
    }
    else if(weatherType === 'Snow'){
        document.getElementById('weather-image').src = '../images/snow.png'
    }
    

    console.log(weatherType);
    }
  }

searchButton.addEventListener('click', ()=>{
    loadWeatherData(inputField.value);
})

