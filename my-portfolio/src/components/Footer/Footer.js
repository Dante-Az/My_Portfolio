import { ReactComponent as GithubLogo } from '../../assets/icons/icons8-github.svg'
import { ReactComponent as LinkedinLogo } from '../../assets/icons/icons8-linkedin.svg'
export default function Footer() {
    return (
        <footer className="footer">
            <h1 className="footer__text">© Jérémy C. - Portfolio</h1>
            <div>
                <GithubLogo className="footer__icon"/>
                <LinkedinLogo className="footer__icon"/>
            </div>
        </footer>
    )
}