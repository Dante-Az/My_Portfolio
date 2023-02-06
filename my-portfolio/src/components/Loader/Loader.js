import Intro from "../Intro/Intro"
export default function Loader() {
    return (
        <div>
            <div className='loader'>
                <h1 className='loader__text'>Dev Loading ...</h1>
                <div className="loader__line"></div>
            </div> 
            <Intro/>
        </div>
    )
}