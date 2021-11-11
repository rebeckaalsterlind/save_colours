import ProjectName from "./ProjectName"
import React from 'react';
import { store } from '../../store';

interface Props {
    colors: any;
}

export default function Project({ colors }: Props) {
    
    const data:any = store.getState().user.projects;  
    colors(data); 

    let projects = []; 

    if (data !== undefined){
        projects = store.getState().user.projects; 
    }
   
    return (
        <div className="projects">
            {projects.map((project: any) => (
                    <ProjectName project={project} />
                ))
            }
        </div>
    )
}

