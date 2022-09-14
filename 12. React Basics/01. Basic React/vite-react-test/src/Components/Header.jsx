import logoImg from "../assets/react.svg"
export default function Header() {
    return (
      <nav>
        <div className='nav-logo'>
          <img src={logoImg} alt="react logo"></img>
          <h2>ReactFacts</h2>
        </div>
        <div className='nav-title'>
          <h3>React Course - Project 1</h3>
        </div>
      </nav>
    );
  }

