import Hamburger from 'hamburger-react'
export default function Navbar() {
    
    const onClick = () => {
        window.location.href = "#about"
    };
    const onClick2 = () => {
        window.location.href = "#skills"
    };
    const onClick3 = () => {
        window.location.href = "#projects"
    };
    const onClick4 = () => {
        window.location.href = "#contact"
    };
    
    return(
        <div>
        <Hamburger onToggle={toggle =>{
           const navblock = document.querySelector(".nav-block");
            if(toggle){
                navblock.classList.toggle("active");
            } else {
                navblock.classList.toggle("active");
            }
        }}/>
        <nav className="nav-block">
            <ul className="navbar">
                <li className="navbar__link" onClick={onClick}>Qui suis-je?</li>
                <li className="navbar__link" onClick={onClick2}>Compétences</li>
                <li className="navbar__link" onClick={onClick3}>Projets</li>
                <li className="navbar__link" onClick={onClick4}>Contact</li>
                <li className="navbar__link navbar__link__border">Mon CV</li>
            </ul>
        </nav>
        </div>
    )
}