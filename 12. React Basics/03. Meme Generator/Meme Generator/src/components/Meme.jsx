import React from 'react'
import memesData from '../memesData'

export default function Meme(){

    // Initial state for Meme image
    const [ meme , setMeme ]  = React.useState({
        topText : "",
        bottomText : "",
        randomImage : 'https://i.imgflip.com/22bdq6.jpg'
    })

    const [allMemeData , setAllMemeData ] = React.useState(memesData)


    // handler for set the new random image
    function getMemeImage(){
        const memesArr = allMemeData.data.memes
        const randomInd = Math.floor(Math.random() * memesArr.length)
        const url = memesArr[randomInd].url
        
        setMeme((prevState) => {
            return {
                ...prevState,
                randomImage : url
            }
        })
    }

    return (
        <main>
            <div className="form">
            
                <input type='text' id='top-text' placeholder='top text' name='top-text'></input>
                <input type='text' id='bottom-text' placeholder='bottom text' name='bottom-text'></input>
                <button type="submit" onClick = {getMemeImage}>Get a new meme image 🖼</button>

                <img src={meme.randomImage}alt = 'meme image'></img>
            </div>
        </main>
    )
}