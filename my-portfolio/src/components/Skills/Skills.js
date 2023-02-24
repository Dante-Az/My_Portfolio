import { BsFillBriefcaseFill } from "react-icons/bs";
import { ReactComponent as Sass } from '../../assets/sass-1.svg'
import { ReactComponent as Html } from '../../assets/html-1.svg'
import { ReactComponent as Css } from '../../assets/css-3.svg'
import { ReactComponent as VsCode } from '../../assets/visual-studio-code-1.svg'
import { ReactComponent as ReactIcon } from '../../assets/react-2.svg'
import { ReactComponent as JsIcon } from '../../assets/logo-javascript.svg'
export default function Skills() {
    return (
        <section id="skills" className="section hidden">
            <div className="section__title hidden">
                <BsFillBriefcaseFill className="hidden"/>
                <h1 className="hidden">Mes Compétences</h1>
            </div>
                <div className="skill">
                    <div className="skill__title hidden">Technologie de prédilection</div>
                    <div className="skill__logos hidden">
                        <div className="logos__block">
                            <Html className="skill__logo hidden"/>
                            <span>HTML</span>
                        </div>
                        <div className="logos__block">
                            <Css className="skill__logo hidden"/>
                            <span>CSS</span>
                        </div>
                        <div className="logos__block">
                            <JsIcon className="skill__logo hidden"/>
                            <span>JAVASCRIPT</span>
                        </div>
                        <div className="logos__block">
                            <ReactIcon className="skill__logo hidden"/>
                            <span>REACT</span>
                        </div>
                        <div className="logos__block">
                            <Sass className="skill__logo hidden"/>
                            <span>SASS</span>
                        </div>
                        <div className="logos__block">
                            <VsCode className="skill__logo hidden"/>
                            <span>VSCODE</span>
                        </div>
                    </div>
                </div>
        </section>
    )
}