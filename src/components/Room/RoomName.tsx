import React, { useEffect } from 'react';
import { store } from '../../store';
import { addColor, setProjectId, setRoomId } from '../../actions';
import EditBtns from '../reuse/EditBtns';
import Color from '../reuse/Color';

interface Props {
    room: any;
    projectId: any;
}

export default function RoomName({ room, projectId }: Props) {
    useEffect(() => {
        store.dispatch(setProjectId(projectId));
        store.dispatch(setRoomId(room._id));
    }, []);

    return (
        <div>
            {room.roomName !== 'noRoom' && (
                <div className="roomHead">
                    <h2 className="h5 roomName">{room.roomName}</h2>
                    <EditBtns obj={room} />
                </div>
            )}
            <div className="colorWrap">
                {room.colors.map((color: any) => (
                    <Color key={color.colorId} color={color} />
                ))}
                <button
                    className="colorBlock btn-secondary"
                    onClick={() => {store.dispatch(addColor(true)); store.dispatch(setRoomId(room._id))}}
                >
                    +
                </button>
            </div>
        </div>
    );
}
