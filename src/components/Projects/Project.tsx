import ProjectName from "./ProjectName"
import React, { useEffect } from 'react';
import { store } from '../../store';

interface Props {
    colors: any;
}

export default function Project({ colors }: Props) {
    
    return (
        <div className="projects">
            {
                store.getState().user.projects.map((project: any) => (
                    <ProjectName key={project._Id} project={project} />
                ))
            }
        </div>
    )
}

