import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
export default function Footer() {
    return (
        <footer className="footer">
            <h1 className="footer__text">© Jérémy C. - Portfolio</h1>
            <div>
                <a href="https://github.com/" target="_blank" alt="icone github" rel="noreferrer">
                    <AiFillGithub className="footer__icon"/> 
                </a>
                <a href="https://fr.linkedin.com/" target="_blank" alt="icone linkedin" rel="noreferrer">
                    <AiFillLinkedin className="footer__icon"/>
                </a>
            </div>
        </footer>
    )
}
