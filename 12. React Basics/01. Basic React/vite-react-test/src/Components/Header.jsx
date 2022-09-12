import logoImg from "../assets/react.svg"
export default function Header() {
    return (
      <nav>
        <img className= 'logo' src={logoImg} alt="react logo"></img>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }

