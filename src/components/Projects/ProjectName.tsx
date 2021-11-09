import React, { useState } from 'react';
import EditBtns from "../reuse/EditBtns"
import RoomName from '../Room/RoomName';

interface Props {
    project: any,
    key: any
}

interface State {
    showProject: boolean  
}

export default function ProjectName ({project, key}: Props, state: State) {

    const [showProject, setShowProject] = useState(false);
    const keyNum = "#" + key;
      
    return (
        <div>
            <div className="projectHead" onClick={() => setShowProject(!showProject)}>
                <h1 className="h3">{project.projectName}</h1>
                <EditBtns obj={project} />        
            </div>
                {showProject && project.rooms.map((room: any) => (
                    <RoomName key={room.roomId} room={room} />
                ))}
        </div>
    );
}