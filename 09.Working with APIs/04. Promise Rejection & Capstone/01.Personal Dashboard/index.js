const cryptoContainer = document.getElementById('crypto-container')

{/* <div id="crypto-container">
<div class="coin">
    <div class="coin-header">
        <img src="" alt="" >
        <p class="coin-title">Bitcoin</p>
    </div>
    <div class="coin-info">
        <p>🎯: t_price.usd}</p>
        <p>👆: 4h.usd}</p>
        <p>👇: h.usd}</p> 
    </div>
</div>
</div> */}


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

const weatherApiUrl = `  `  
