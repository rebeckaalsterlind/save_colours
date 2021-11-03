import ProjectName from "./ProjectName"
import data from "../../mockdata.json";
import { store } from '../../store';


export default function Project() {
 
    return (
        <div className="projects">
            {store.getState().username === data.username && (
                data.projects.map((project: any) => (
                    <ProjectName key={project.projectId} project={project} />
                ))
            )}
        </div>
    )
}

