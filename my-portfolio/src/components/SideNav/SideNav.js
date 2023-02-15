import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { RxDoubleArrowLeft } from "react-icons/rx";

export default function Socials() {
    return (
        <>
            <div className="socials">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><AiFillLinkedin className="socials__icon"/></a>
                <a href="https://github.com" target="_blank" rel="noreferrer"><AiFillGithub className="socials__icon"/></a>
            </div>
            <div className="scrollup">
                <RxDoubleArrowLeft className="scrollup__icon"/>
                <a href="#about" className="scrollup__button">Scroll Up</a>
            </div>
        </>
    )
}