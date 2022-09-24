

export default function Header(){
    return (
        <header>
            <img src='Troll Face.png' alt='page log' ></img>
            <h1>Meme Generator</h1>
            <button className='icon' onClick={
                function (){
                    document.body.classList.toggle('theme')                    
                }
            }>Theme</button>
            </header>
    )
}