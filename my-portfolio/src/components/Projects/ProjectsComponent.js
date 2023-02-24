import { Link } from "react-router-dom"
import ProjectsTags from "./ProjectsTags"
export default function ProjectsComponents(props) {
    const tags = props.tags.map((tagList, index) => {
        return <ProjectsTags
        key={index} 
        tag = {tagList}      
        />  
})
 
  return(
    <article className="project hidden">
      <div className="cover">
        <div className="project__cover" style={{backgroundImage: `url(${props.cover})`}}></div>
      </div>
        <div className="project__content">
            <div className="project__title">{props.title}</div>
            <div className="project__description">{props.description}</div>
            <div className="project__tags">{tags}</div>
            <div className="project__links">
              <Link to={props.links.demo} className="button button--green" target="_blank">Live demo</Link>
              <Link to={props.links.github} className="button button--green" target="_blank">Code source</Link>
            </div>
        </div>
    </article>
    
  )
}