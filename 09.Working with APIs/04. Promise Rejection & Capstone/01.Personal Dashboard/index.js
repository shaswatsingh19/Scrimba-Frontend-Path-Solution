const cryptoContainer = document.getElementById('crypto-container')
const weatherContainer = document.getElementById('weather-container')
const timeContainer  = document.querySelector('#main')
const authorContainer = document.getElementById('author')
// ------------------ Unsplash API ----------------------

const unsplashApi = "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"

fetch(unsplashApi)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        document.body.style.backgroundImage =  `url(${data.urls.regular})`  

        authorContainer.innerHTML =  `   
            <p>Created By: ${data.user.name}</p>
        `  
        console.log(data.urls.regular)
    })
    .catch(err => {

        console.log(err)
        const defaultImg = 'https://images.unsplash.com/photo-1493130952181-47e36589f64d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjI1NjA0ODY&ixlib=rb-1.2.1&q=80&w=1080%20%20%20%20%20%20%20%20%20%C5%81ukasz%20%C5%81ada'
        const defaultName = 'Łukasz Łada'

        document.body.style.backgroundImage =  `url(${defaultImg})`  
        authorContainer.innerHTML =  `   
            <p>Created By: ${defaultName}</p>
        `  

    })


// -------------------- Crpyto API --------------------

const apiCryptoUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin'

fetch(apiCryptoUrl)
    .then(res => {
        if(!res.ok){
            throw err
        }
        return res.json()
    })
    .then(data => {
        console.log(data)

        cryptoContainer.innerHTML =  `  
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
    })
    .catch((Error) => {
        console.log(Error)
        cryptoContainer.innerHTML =  `  
            <div class="coin-header">
            <img src="${"image"}" alt="${"No Coin"} Image" >
            <p class="coin-title">No Coin</p>
            </div>
            <div class="coin-info">
            <p>🎯: ₹ N/A</p>
            <p>👆: ₹ N/A</p>
            <p>👇: ₹ N/A</p>
            </div>
        ` 
        }
    )


// ------------------ Weather API ----------------------

navigator.geolocation.getCurrentPosition((position) => {

    console.log(position.coords.latitude, position.coords.longitude)
    const weatherApiUrl = `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`  
    
    fetch(weatherApiUrl)
        .then(res => res.json())
        .then(data => {
            
            const imgValue = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            weatherContainer.innerHTML = `
                <img src="${imgValue}" alt="${data.weather[0].main} image">
                <p class="weather">${data.main.temp}<sup>o</sup></p>
                <p class="location">${data.name}</p>
            `
        })
        .catch((err) => {
            console.log(err)
            const imgValue = `http://openweathermap.org/img/wn/01d@2x.png`
            weatherContainer.innerHTML = `
                <img src="${imgValue}" alt="No image">
                <p class="weather">NA</p>
                <p class="location">something went wrong</p>
            `
        })
        
})


// ------------------ Time component ----------------------

function getCurrentTime(){

    let currTime = new Date().toLocaleTimeString('en-us' , {timeStyle: 'medium'})
    timeContainer.textContent = currTime

}
setInterval(getCurrentTime , 1000)





