import { useState } from "react";
import Navbar from "../Navbar/Navbar";
export default function Header() {

const [scroll, setScroll] = useState(false);
const changeValueOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if(scrollValue > 0) {
        setScroll(true)
    } else {
        setScroll(false)
    }
}
window.addEventListener('scroll',changeValueOnScroll);

    return (
    <div className={scroll? "header sticky":"header"}>
        <h1 className={scroll? "header__text sticky":"header__text"}>Jérémy Carrière</h1>
        <Navbar/>
    </div>
    ) 
}