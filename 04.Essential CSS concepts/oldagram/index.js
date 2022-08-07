const postsArray = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


let id  = 0
const main = document.querySelector('main')
let likeBtnPressed = false

// if(document.body.scrollBy(500)){
//     console.log('sd')
// }

window.onscroll = (e)=>{
    if(window.scrollY+1000 > document.body.scrollHeight){
        let randomIndex = Math.floor(Math.random() *postsArray.length)
        console.log(randomIndex)

        const div  = document.createElement('div')
        
        div.classList.add('user')
        div.setAttribute('id',`user-${randomIndex}`)
        // id+=1

        div.innerHTML =`<section class="user-info">
        <img class="profile-pic" src = ${postsArray[randomIndex].avatar} alt="user {randomIndex} images">
        <div class="name-location">
            <h4 class='name'>${postsArray[randomIndex].name}</h4>
            <p class='location'>${postsArray[randomIndex].location}</p>
        </div>
        </section>

        <section class="post-container">
            <img class='post' src="${postsArray[randomIndex].post}" alt="${postsArray[randomIndex].name}'s post" ondblclick=updateLikesViaPost(event)>
        </section>

        <section class="post-info-container">
            <div class="like-follow-btn">
                <img src="images/icon-heart.png" class="like-btn" alt="like button" onclick=updateLikesViaLike(event)>
                <img src="images/icon-comment.png" class="comment-btn"alt="comments button">
                <img src="images/icon-dm.png" class="dm-btn"alt="dm button">
            </div>
            <div class="likes-container">
                <h4 class="total-likes"><span class='likes'>${postsArray[randomIndex].likes}</span> likes</h4>
            </div>
            <div class="comments-container">
                <div class="comments">
                    <h4 class="username">${postsArray[randomIndex].username}</h4>
                    <p class="comment">${postsArray[randomIndex].comment}</p>
                </div>
                
            </div>
        </section>
        `
        main.append(div)
        }
}

// postsArray.forEach(p => {
    
//     const div  = document.createElement('div')
    
//     div.classList.add('user')
//     div.setAttribute('id',`user-${id}`)
//     id+=1

//     div.innerHTML =`<section class="user-info">
//     <img class="profile-pic" src = ${p.avatar} alt="user {id} images">
//     <div class="name-location">
//         <h4 class='name'>${p.name}</h4>
//         <p class='location'>${p.location}</p>
//     </div>
//     </section>

//     <section class="post-container">
//         <img class='post' src="${p.post}" alt="${p.name}'s post" ondblclick=updateLikesViaPost(event)>
//     </section>

//     <section class="post-info-container">
//         <div class="like-follow-btn">
//             <img src="images/icon-heart.png" class="like-btn" alt="like button" onclick=updateLikesViaLike(event)>
//             <img src="images/icon-comment.png" class="comment-btn"alt="comments button">
//             <img src="images/icon-dm.png" class="dm-btn"alt="dm button">
//         </div>
//         <div class="likes-container">
//             <h4 class="total-likes"><span class='likes'>${p.likes}</span> likes</h4>
//         </div>
//         <div class="comments-container">
//             <div class="comments">
//                 <h4 class="username">${p.username}</h4>
//                 <p class="comment">${p.comment}</p>
//             </div>
            
//         </div>
//     </section>
//     `
//     main.append(div)
    
// })

function updateLikes(node){

    let currIndex = node.id.split('-')[1]
    let curr = node.children[2].children[1].children[0].childNodes[0].textContent
    let val = 0
    if(postsArray[currIndex].likes == curr ){
        val = parseInt(curr) +1
    }else{
        val = parseInt(curr) -1
    }
    node.children[2].children[1].children[0].childNodes[0].textContent = val
}

function updateLikesViaLike(e){
    let node = e.target.parentNode.parentNode.parentNode

    updateLikes(node)
    
}

function updateLikesViaPost(e){
    let node = e.target.parentNode.parentNode
    
    updateLikes(node)
}

