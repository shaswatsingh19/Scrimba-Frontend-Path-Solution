

export default function Header(){

    function changeTheme(){
        document.body.classList.toggle('theme')                    
    }

    return (
        <header>
            <img src='Troll Face.png' alt='page log' ></img>
            <h1>Meme Generator</h1>
            <button className='icon' onClick={changeTheme}>Theme</button>
            </header>
    )
}