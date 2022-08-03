const myEmojis = ["👨‍💻","⛷","🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")

const pushBtn = document.getElementById('push-btn')
pushBtn.addEventListener('click',addToEnd)

const unshiftBtn = document.getElementById('unshift-btn')
unshiftBtn.addEventListener('click',addToStart)

const popBtn = document.getElementById('pop-btn')
popBtn.addEventListener('click',deleteFromEnd)

const shiftBtn = document.getElementById('shift-btn')
shiftBtn.addEventListener('click',deleteFromStart)

function renderEmojis(){

    emojiContainer.innerHTML = "" // Clearing the div after insertion 
    for (let i = 0; i < myEmojis.length; i++) {

        // emoji += `<span>${myEmojis[i]}</span>` can also be done like this as add emoji to emojiCOntainer with innerHTML after loop
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    
    }
}    
renderEmojis()


function addToEnd(){
    if(emojiInput.value){
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis();

    }
}


function addToStart(){
    if(emojiInput.value){
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis();
    }
}



function deleteFromEnd(){
    if(myEmojis.length>0){
        myEmojis.pop(emojiInput.value)
        renderEmojis();
    }

    
}

function deleteFromStart(){
    if(myEmojis.length>0){
        myEmojis.shift(emojiInput.value)
        renderEmojis();
    }

    
}

