import photoGrid from '../assets/photo-grid.png'

export default function Hero(){
    return (
        <div className='hero'>
            <img id='main-img' src={photoGrid} alt='main page grid image'></img>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}