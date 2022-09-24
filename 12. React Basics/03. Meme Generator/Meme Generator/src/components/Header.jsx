

export default function Header(){
    return (
        <header>
            <section id='logo'>
                <img src='Troll Face.png' alt='page log' ></img>
                <h1>Meme Generator</h1>
            </section>
            <section id='header-title'>
                <button className='icon' onClick={
                    function (){
                        document.body.classList.toggle('theme')
                        document.getElementById('container').classList.toggle('theme')
                    }
                }>Theme</button>
                {/* will implement logic for dark/light mode */}
            </section>
        </header>
    )
}