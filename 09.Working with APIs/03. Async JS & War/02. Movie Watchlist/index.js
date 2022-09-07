const exploringIcon = document.getElementById('exploring-icon')
const unableIcon = document.getElementById('unable-icon')
const inputData = document.getElementById('input-data')
const searchBtn  = document.getElementById('search-btn')
const movieCont = document.getElementById('movie-container')
const addToWatchlistBtn = document.getElementById('add-to-watchlist')

let searchKeyword = ''


unableIcon.style.display = 'none'


// unable text is removed as soon as we focus on input box and will be shown as soon as we search for bad input 
inputData.addEventListener('focus',function(e){
    unableIcon.style.display = 'none'
    console.log(e.value)
})

function fetchingEachMovie(movieUrls){

    console.log(movieUrls)

    fetch(movieUrls)
        .then(res => res.json())
        .then(data => {
            console.log(data.Ratings[0].Value)
            const movie = document.createElement('div')
            movie.classList.add('movie')

            const rating = data.Ratings[0].Value.split('/')[0]
            movie.innerHTML = `
                <div class="movie-poster">
                        <img src="${data.Poster}" alt="${data.Title} poster" >
                    </div>
                    <div class="movie-info">
                        <div class="heading-rating">
                            <h2>${data.Title}</h2>
                            <h2>${data.Year}</h2>
                            <div class="rating">
                                <p>*</p>
                                <p>${rating}</p>
                            </div>
                        </div>
                        <div class="details">
                            <p>${data.Runtime}</p>
                            <p>${data.Genre}</p>
                            <p id="add-to-watchlist">
                                +
                                Watchlist 
                            </p>
                        </div>
                        <div class="description">
                            <p>${data.Plot}</p>
                        </div>
                    </div>
                `
            movieCont.append(movie)

        })

    addToWatchlistBtn.addEventListener('click',function(){
        alert('asdsd')
    })

}


function findMoviesFromId(arrFetched){

    let arrId = arrFetched.map(el => el.imdbID)
    
    console.log(arrId)
    
    arrId.forEach(id => {
    
        const SearchMovieUrl  = `https://www.omdbapi.com/?apikey=4948befc&r&i=${id}`
        console.log(SearchMovieUrl)

        fetchingEachMovie(SearchMovieUrl)
    })
    
}




searchBtn.addEventListener('click',function(){

    movieCont.innerHTML = ''
    exploringIcon.style.display = 'none'
    
    console.log(inputData.value)
    searchKeyword = inputData.value
    const apiUrlFromKeyword =  `https://www.omdbapi.com/?apikey=4948befc&s=${searchKeyword}`

    console.log(apiUrlFromKeyword)


    if(inputData.value.trim() == ''){
        unableIcon.style.display = 'block'
    }else{
        fetch(apiUrlFromKeyword)
            .then(res => {
                return res.json()
            })
            .then(data => {
                
                if(data.Response == 'False'){
                    throw Error
                }else{
                    console.log(data)

                    const arrFetched = data.Search
                    findMoviesFromId(arrFetched)
                }

            })
            .catch(Error => {
                console.log(Error)
                unableIcon.style.display = 'block'
            })
    }
})
