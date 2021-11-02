import React, { useState } from 'react';
import EditBtns from "../reuse/EditBtns"
import RoomName from '../Room/RoomName';

interface Props {
    project: any
}

interface State {
    showProject: boolean
}

export default function ProjectName ({project}: Props, state: State) {

    const [showProject, setShowProject] = useState(false)
    
    return (
    <div>
        <header>
            <h3  onClick={() => setShowProject(!showProject)}
            style={{display: 'inline'}} >{project.projectName}</h3>
            <EditBtns />        
        </header>
        {showProject &&
           project.rooms.map((room: any) => (
            <RoomName key={room.roomId} room={room} />
        ))}
        </div>
    )
}