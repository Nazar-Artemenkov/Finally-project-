const appId = '47a6d53432feea74973b0c88250ccfb4';

async function fetchWeather() {
    const city = document.getElementById('city').value.trim()
    const resWeather = document.getElementById('weather-result')
    const errMess = document.getElementById('error-message')

    errMess.textContent = ''
    resWeather.textContent = ''

    if (!city){
        alert('Enter city name')
        return
    }

    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`)
        const data = await res.json()

        if(res.ok){
            resWeather.innerHTML = `<h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>`
        }else{
            resWeather.innerHTML = ''
            errMess.innerHTML = `Error ${res.status}: ${data.message}`
        }
    }catch (error){
        resWeather.innerHTML = ''
        errMess.innerHTML = 'Network error. try again'
    }
}