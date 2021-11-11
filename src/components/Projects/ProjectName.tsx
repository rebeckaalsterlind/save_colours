import React, { useState } from 'react';
import EditBtns from '../reuse/EditBtns';
import RoomName from '../Room/RoomName';
import AddRoomToProject from '../Room/AddRoomToProject';

interface Props {
    project: any;
    key: any;
}

interface State {
    showProject: boolean;
}

export default function ProjectName({ project, key }: Props, state: State) {
    const [showProject, setShowProject] = useState(false);
    const [showRoom, setShowRoom] = useState(false);

    return (
        <div>
            <div
                className="projectHead"
                onClick={() => setShowProject(!showProject)}
            >
                <h1 className="h4">{project.projectName}</h1>
                <EditBtns obj={project} />
            </div>
            {showProject &&
                project.rooms.map((room: any) => (
                    <RoomName key={room.roomId} room={room} />
                ))}
            {showProject && (
                <button
                    className="notActiveBtn btn btn-secondary shadow-none"
                    onClick={() => setShowRoom(!showRoom)}
                >
                    + Rum
                </button>
            )}
            {showRoom && (
                <AddRoomToProject
                    projectid={project._id}
                    setShowRoom={setShowRoom}
                />
            )}
        </div>
    );
}
