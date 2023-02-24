import data from "./ProjectsData"
import ProjectsComponent from "./ProjectsComponent"
import { BsLaptop } from "react-icons/bs"
export default function Projects() {
    const projects = data.map(project => {
        return <ProjectsComponent 
        key={project.id}
        {...project}
        />
    })
    return (
        <section id="projects" className="section hidden">
            <div className="section__title hidden">
                <BsLaptop/>
                <h1 className="hidden">Mes Projets</h1>
            </div>
            <div className="projects__block">
                {projects}
            </div>
        </section>
    )
}