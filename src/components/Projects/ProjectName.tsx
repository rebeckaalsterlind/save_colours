import React, { useState } from 'react';
import EditBtns from "../reuse/EditBtns"
import RoomName from '../Room/RoomName';

interface Props {
    project: any,
}

interface State {
    showProject: boolean,
}

export default function ProjectName ({project}: Props, state: State) {

    const [showProject, setShowProject] = useState(false);

    return (
        <div>

            <div className="projectHead" onClick={() => setShowProject(!showProject)}>
                <h1 className="h4">{project.projectName}</h1>
                <EditBtns obj={project} />        
            </div>
                {showProject && project.rooms.map((room: any) => (
                    <RoomName key={room.roomId} room={room} projectId={project._id}/>
                ))}
        </div>
    );
}