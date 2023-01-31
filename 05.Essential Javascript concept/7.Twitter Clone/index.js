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

document.addEventListener('click',(e) => {
    if(e.target.dataset.like){
        handleLikeClicked(e.target.dataset.like)
    }else if(e.target.dataset.reply){
        console.log(e.target.dataset)
    }else if(e.target.dataset.retweet){
        console.log(e.target.dataset)
    }
})

function handleLikeClicked(tweetId){

    console.log('liked ',tweetId)
    const targetTweetObj = tweetsData.filter(data => {
        if(data.uuid === tweetId){
            return data
        }
    })[0]
    if(targetTweetObj.isLiked){
        targetTweetObj.likes-=1
        targetTweetObj.isLiked = false
    }else{
        targetTweetObj.likes+=1
        targetTweetObj.isLiked = true
    }
    renderFeed() // To render new like count UI
}

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
                            <i class="fa-regular fa-comment-dots" data-reply=${data.uuid}></i>
                            ${data.replies.length}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-heart" data-like=${data.uuid}></i>
                            ${data.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet" data-retweet=${data.uuid}></i>
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
