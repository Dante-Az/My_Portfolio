import { useEffect } from "react";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

export default function Home() {

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             console.log(entry)
    //             if(entry.isIntersecting) {
    //                 entry.target.classList.add('show');
    //             }
    //         });
    //     });
    
    //     const hiddenElements = document.querySelectorAll('.hidden');
    //     hiddenElements.forEach((el) => observer.observe(el));    
    // }, []);

    useEffect(() => {
        const hidingObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('show', entry.isIntersecting);
            });
        });
        
        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach(((element, i) => {
            element.style.transitionDelay = i * 20 + "ms";
            hidingObserver.observe(element);
        }));
    })

    
    return (
        <div className="home">
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}