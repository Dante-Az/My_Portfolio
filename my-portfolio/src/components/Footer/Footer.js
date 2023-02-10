import { ReactComponent as GithubLogo } from '../../assets/icons/icons8-github.svg'
import { ReactComponent as LinkedinLogo } from '../../assets/icons/icons8-linkedin.svg'
export default function Footer() {
    return (
        <footer className="footer">
            <h1 className="footer__text">© Jérémy C. - Portfolio</h1>
            <div>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                    <GithubLogo className="footer__icon"/> 
                </a>
                <a href="https://fr.linkedin.com/" target="_blank" rel="noreferrer">
                    <LinkedinLogo className="footer__icon"/>
                </a>
            </div>
        </footer>
    )
}