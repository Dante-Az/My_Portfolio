import './Loader.css'
export default function Loader() {
    return (
        <div>
            <div className='loaderContainer'>
                <h1 className='loaderText'>Dev Loading ...</h1>
                <div className="loader"></div>
            </div> 
            <div className='introContainer'>
                <h1>Présentation</h1>
            </div>  
        </div>
    )
}