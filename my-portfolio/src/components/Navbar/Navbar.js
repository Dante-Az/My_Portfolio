import Hamburger from 'hamburger-react'
import { useState } from 'react';
export default function Navbar() {
    
    const [isActive, setIsActive] = useState('#')

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
                <li onClick={() => setIsActive('#about')} className={isActive === "#about" ? "navbar__link navbar__link--active" : "navbar__link"}>
                    <a href="#about">Qui suis-je?</a>
                </li>
                <li onClick={() => setIsActive('#skills')} className={isActive === "#skills" ? "navbar__link navbar__link--active" : "navbar__link"}>
                    <a href="#skills">Compétences</a>
                </li>
                <li onClick={() => setIsActive('#projects')} className={isActive === "#projects" ? "navbar__link navbar__link--active" : "navbar__link"}>
                    <a href="#projects">Projets</a>
                </li>
                <li onClick={() => setIsActive('#contact')} className={isActive === "#contact" ? "navbar__link navbar__link--active" : "navbar__link"}>
                    <a href="#contact">Contact</a>
                </li>
                <li className="navbar__link navbar__link__border">
                    <a href="#about">Mon CV</a>
                </li>
            </ul>
        </nav>
        </div>
    )
}