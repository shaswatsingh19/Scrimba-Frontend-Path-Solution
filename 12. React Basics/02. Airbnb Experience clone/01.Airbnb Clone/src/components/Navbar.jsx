import airbnbLogo from '../assets/airbnb-logo.png'
import photoGrid from '../assets/photo-grid.png'

function Navbar(){
    return (
        <nav>
            <header>
                <img id='nav-logo' src={airbnbLogo} alt='airbnb logo'></img>
            </header>
            <div className='hero'>
                <img id='main-img' src={photoGrid} alt='main page grid image'></img>

                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </nav>
    )
}

export default Navbar