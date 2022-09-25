import React from 'react'

export default function Header(){

    const [theme , setTheme ] = React.useState('Dark')

    function changeTheme(){
        
        document.body.classList.toggle('theme')   
        setTheme((prevTheme) => {
            if (prevTheme == 'Dark' ){
                return 'Light'
            }return 'Dark'
        })              
    }

    return (
        <header>
            <img src='Troll Face.png' alt='page log' ></img>
            <h1>Meme Generator</h1>
            <button className='icon' onClick={changeTheme}>{theme}</button>
        </header>
    )
}