import ProjectName from "./ProjectName"
import data from "../../mockdata.json";
import { store } from '../../store';

interface Props {
    colors: any;
}


export default function Project({ colors }: Props) {

    colors(data.projects); 
 
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

