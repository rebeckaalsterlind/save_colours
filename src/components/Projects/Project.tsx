import React, { useState } from 'react';
import ProjectName from "./ProjectName"
import Room from "../Room/Room"
import data from "../../mockdata.json";


interface Props {

}

interface State {
    showProject: boolean;
    projectId: number;
}

export default function Project({ }: Props, state: State) {

    console.log(data.projects);

    const [showProject, setShowProject] = useState(false);
    const [selectedproject, setSelectedproject] = useState();

    return (
        <div>
            {data.projects.map((project: any) => (
                <h1 key={project.projectId} onClick={() => { setShowProject(!showProject); setSelectedproject(project); }}> {project.projectName}</h1>
            ))}
            <ProjectName /> // prop: name
            // map room
            {showProject && (
            <Room project={selectedproject} />
            )}
        </div>
    )
}