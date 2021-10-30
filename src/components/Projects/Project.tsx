import React, { useState } from 'react';
import ProjectName from "./ProjectName"
import Room from "../Room/Room"
import data from "../../mockdata.json";

console.log(data);

interface Props {

}

interface State {
    showProject: boolean;
    projectId: number;
}

export default function Project({ }: Props, state: State) {

    const [showProject, setShowProject] = useState(false);
    const [selectedproject, setSelectedproject] = useState();

    return (
        <div>
            {data.projects.map((project: any) => (
                <h1 key={project.id} onClick={() => { setShowProject(!showProject); setSelectedproject(project); }}> {project.projectName}</h1>
            ))}
            <ProjectName /> // prop: name
            // map room
            {showProject && (
            <Room project={selectedproject} />
            )}
        </div>
    )
}