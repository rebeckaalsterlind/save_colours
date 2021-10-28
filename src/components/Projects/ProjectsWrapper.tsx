import Project from "./Project"
import data from "../../mockdata.json";

console.log(data.projects);

export default function ProjectsWrapper () {
    return (
        <div>
           {data.projects.map((project: any) => (
                <h1 key={project.id}> {project.name}</h1>
                ))}
            <Project />
        </div>
    )
}