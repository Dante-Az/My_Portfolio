import {Routes, Route} from "react-router-dom"
import Home from "../../Pages/Home/Home"
import NotFound from "../../Pages/NotFound/NotFound"


export default function Router() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>        
    )
}