import {tweetsData} from './data.js'

import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'


// Working with like,reply and retweet event
document.addEventListener('click',(e) => {
    if(e.target.dataset.like){
        handleLikeClicked(e.target.dataset.like)
    }else if(e.target.dataset.retweet){
        handleRetweetClicked(e.target.dataset.retweet)
    }else if (e.target.dataset.reply){
        handleReplyClicked(e.target.dataset.reply)
    }else if(e.target.id === "tweet-btn") {
        console.log(e)
        handleTweetBtnClick()
    }
})

function handleLikeClicked(tweetId){
    
    const targetTweetObj = tweetsData.filter(data => {
        if(data.uuid === tweetId){
            return data
        }
    })[0]
    
    if(targetTweetObj.isLiked){
        targetTweetObj.likes-=1
    }else{
        targetTweetObj.likes+=1
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    renderFeed() // To render new like count UI
}


function handleRetweetClicked(tweetId){
    console.log('retweet ',tweetId)
    const targetTweetObj = tweetsData.filter(data => {
        if(data.uuid === tweetId){
            return data
        }
    })[0]

    if(targetTweetObj.isRetweeted){
        targetTweetObj.retweets-=1
    }else{
        targetTweetObj.retweets+=1
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
    renderFeed() // To render new like count UI
}

function handleReplyClicked(replyId){
    console.log(replyId)

    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}

// Tweet Button 
function handleTweetBtnClick(){
    
    const tweetInput  = document.getElementById('tweet-input')
    
    
    if(tweetInput.value){
        console.log(tweetInput.value)
        tweetsData.unshift({
            handle: uuidv4().split('-')[0],
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4(),
        })
        renderFeed()
        tweetInput.value = ''
    }
    else{
        alert("please provide a tweet")
    }
}


function getFeedHtml(){
    const tweetArr = []
    
    let likedClass  = ''
    let retweetClass  = ''

    tweetsData.forEach(data => {
        likedClass = data.isLiked ? 'liked' : ''
        retweetClass = data.isRetweeted ? 'retweeted' : ''
        
        let tweetReplies = ''
        if(data.replies.length){
            data.replies.map(d => {
                   tweetReplies +=  `<div class="tweet-reply">
                        <div class="tweet-inner">
                            <img src=${d.profilePic} class="profile-pic">
                            <div>
                                <p class="handle">${d.handle}</p>
                                <p class="tweet-text">${d.tweetText}</p>
                            </div>
                        </div>
                    </div>`})
        }

        tweetArr.push(
            `<div class="tweet">
            <div class="tweet-inner">
                <img src=${data.profilePic} class="profile-pic">
                <div>
                    <p class="handle">${data.handle}</p>
                    <p class="tweet-text">${data.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            <i class="fa-regular fa-comment-dots " data-reply=${data.uuid}></i>
                            ${data.replies.length}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-heart ${likedClass}" data-like=${data.uuid}></i>
                            ${data.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet ${retweetClass}" data-retweet=${data.uuid}></i>
                            ${data.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
            <div id="replies-${data.uuid}" class="hidden">
                ${tweetReplies}
            </div>   
        </div>`)
    })
    return [...tweetArr].join(' ')
}

function renderFeed(){
    document.getElementById('feed').innerHTML =  getFeedHtml()
}

renderFeed()
