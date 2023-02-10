import Hamburger from 'hamburger-react'
export default function Navbar() {
    
    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
    
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute("id");
  
        if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
        ){
        document.querySelector(".nav-block a[href*=" + sectionId + "]").classList.add("navbar__link--active");
        } else {
        document.querySelector(".nav-block a[href*=" + sectionId + "]").classList.remove("navbar__link--active");
        }
    });
    }

 
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
            <ul className= "navbar">
                <li className="navbar__link">
                    <a className="navbar__link" href="#about">Qui suis-je?</a>
                </li>
                <li className="navbar__link">
                    <a  className="navbar__link" href="#skills">Compétences</a>
                </li>
                <li className="navbar__link">
                    <a className="navbar__link" href="#projects">Projets</a>
                </li>
                <li className="navbar__link">
                    <a className="navbar__link" href="#contact">Contact</a>
                </li>
                <li className="navbar__link">
                    <a className="navbar__link navbar__link__border" href="https://www.google.fr/">Mon CV</a>
                </li>
            </ul>
        </nav>
        </div>
    )
}