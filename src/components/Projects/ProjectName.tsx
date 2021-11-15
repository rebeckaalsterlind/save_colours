import React, { useState } from 'react';
import EditBtns from '../reuse/EditBtns';
import RoomName from '../Room/RoomName';
import AddRoomToProject from '../Room/AddRoomToProject';

interface Props {
    project: any;
}

interface State {
    showProject: boolean;
}

export default function ProjectName({ project }: Props, state: State) {
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
                    <RoomName
                        key={room.roomId}
                        room={room}
                        projectId={project._id}
                    />
                ))}
            {showProject && project.projectName !== 'Övriga färger' && (
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
                    onHideModal={setShowRoom}
                />
            )}
        </div>
    );
}
