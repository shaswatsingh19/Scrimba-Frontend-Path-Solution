import React from 'react'
import memesData from '../memesData'

export default function Meme(){

    // Initial state for Meme image
    const [ meme , setMeme ]  = React.useState({
        topText : "",
        bottomText : "",
        randomImage : 'https://i.imgflip.com/3si4.jpg'
    })

    function handlerChange(event){
        const { name , value } = event.target

        setMeme((prevState) => {
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    const [allMemeData , setAllMemeData ] = React.useState(memesData)

    // handler for set the new random image
    function getMemeImage(){
        const memesArr = allMemeData.data.memes
        const randomInd = Math.floor(Math.random() * memesArr.length)
        const url = memesArr[randomInd].url
        
        setMeme((prevState) => {
            return {
                // ...prevState,
                randomImage : url,
                topText : "",
                bottomText : "",
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input 
                    type='text' 
                    id='top-text' 
                    placeholder='top text' 
                    name='topText' 
                    value = {meme.topText}
                    onChange={handlerChange}></input>
                <input type='text' 
                    id='bottom-text' 
                    placeholder='bottom text' 
                    name='bottomText' 
                    value = {meme.bottomText}
                    onChange={handlerChange}></input>
                <button type="submit" onClick = {getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}