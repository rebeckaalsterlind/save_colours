import ProjectName from "./ProjectName"
import React from 'react';
import { store } from '../../store';

interface Props {
    colors: any;
}

export default function Project({ colors }: Props) {
    
    const data:any = store.getState().user.projects;  
    colors(data); 
   
    return (
        <div className="projects">
            {store.getState().user.projects.map((project: any) => (
                    <ProjectName project={project} />
                ))
            }
        </div>
    )
}

