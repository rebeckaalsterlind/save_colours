import ProjectName from "./ProjectName"
import data from "../../mockdata.json";
import { store } from '../../store';

interface Props {
    colors: any;
}


export default function Project({ colors }: Props) {

    colors(data); 
    //"store.getState().user.projects" will replace "data.projects in map"
    //and we prop dont need: store.getState().username === data.username &&..
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

