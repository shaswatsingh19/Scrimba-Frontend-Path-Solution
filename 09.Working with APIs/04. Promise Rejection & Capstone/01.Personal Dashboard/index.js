const cryptoContainer = document.getElementById('crypto-container')
const weatherContainer = document.getElementById('weather-container')
const timeContainer  = document.querySelector('#main')

// ------------------ Unsplash API ----------------------



// -------------------- Crpyto API --------------------

const apiCryptoUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin'

fetch(apiCryptoUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        const coin = document.createElement('div')
        coin.classList.add('coin')

        coin.innerHTML =  `  
            <div class="coin-header">
                <img src="${data.image.small}" alt="${data.name} Image" >
                <p class="coin-title">${data.name}</p>
            </div>
            <div class="coin-info">
                <p>🎯: ₹${data['market_data']['current_price']['inr']}</p>
                <p>👆: ₹${data['market_data']['high_24h']['inr']}</p>
                <p>👇: ₹${data['market_data']['low_24h']['inr']}</p>
            </div>
            ` 
        cryptoContainer.append(coin)
    })


// ------------------ Weather API ----------------------

navigator.geolocation.getCurrentPosition((position) => {

    console.log(position.coords.latitude, position.coords.longitude)
    const weatherApiUrl = `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`  
    
    fetch(weatherApiUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const imgValue = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


            weatherContainer.innerHTML = `
                <img src="${imgValue}" alt="${data.weather[0].main} image">
                <p class="weather">${data.main.temp}<sup>o</sup></p>
                <p class="location">${data.name}</p>
            `
        })  
})


// ------------------ Time component ----------------------

function getCurrentTime(){

    let currTime = new Date().toLocaleTimeString('en-us' , {timeStyle: 'medium'})
    timeContainer.textContent = currTime

}
setInterval(getCurrentTime , 1000)





