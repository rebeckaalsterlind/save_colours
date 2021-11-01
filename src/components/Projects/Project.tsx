import React, { useState } from 'react';
import ProjectName from "./ProjectName"
import Room from "../Room/Room"
import data from "../../mockdata.json";
import { store } from '../../store';

interface Props {
}

interface State {
    showProject: boolean;
    selectedproject: object[];
}

export default function Project({ }: Props, state: State) {

    const [showProject, setShowProject] = useState(false);
    const [selectedproject, setSelectedproject] = useState();

    return (
        <div>

            {store.getState().username === data.username && (
                data.projects.map((project: any) => (
                    <h1 key={project.projectId} onClick={() => { setShowProject(!showProject); setSelectedproject(project); }}> {project.projectName}</h1>
                ))
            )}

            <ProjectName /> // prop: name
            // map room
            {showProject && (
                <Room project={selectedproject} />
            )}
        </div>
    )
}