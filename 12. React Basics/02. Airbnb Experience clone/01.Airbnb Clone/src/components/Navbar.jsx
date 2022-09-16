import airbnbLogo from '../assets/airbnb-logo.png'

function Navbar(){
    return (
        <nav>
            <img id='nav-logo' src={airbnbLogo} alt='airbnb logo'></img>        
        </nav>
    )
}

export default Navbar