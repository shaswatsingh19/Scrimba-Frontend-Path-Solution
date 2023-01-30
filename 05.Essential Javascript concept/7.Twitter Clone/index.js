import {tweetsData} from './data.js'

const tweetInput  = document.getElementById('tweet-input')
const tweetBtn  = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click',() => {
    if(tweetInput.value){
        console.log(tweetInput.value)
    }else{
        alert("please provide a tweet")
    }
})


function getFeedHtml(){
    const tweetArr = []
    tweetsData.forEach(data => {
        tweetArr.push(
        `<div class="tweet">
            <div class="tweet-inner">
                <img src=${data.profilePic} class="profile-pic">
                <div>
                    <p class="handle">${data.handle}</p>
                    <p class="tweet-text">${data.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            ${data.replies.length}
                        </span>
                        <span class="tweet-detail">
                            ${data.likes}
                        </span>
                        <span class="tweet-detail">
                            ${data.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
        </div>`)
    })
    console.log(tweetArr)
    return [...tweetArr].join(' ')
}

function renderFeed(){
    document.getElementById('feed').innerHTML =  getFeedHtml()
}

renderFeed()
