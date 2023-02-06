import Profile from "../Profile/Profile" 
export default function Intro() {
    return(
        <div className='intro'>
                <div className="intro-content">
                    <h1 className="intro__text">Jérémy Carrière</h1>
                    <span className="intro__text intro__text--underline">Développeur Front-End</span>
                </div>
                <Profile/>
            </div>  
    )
}