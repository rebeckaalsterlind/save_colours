import React from 'react';
import { store } from '../../store';
import { addColorInRoom } from '../../actions';
import EditBtns from "../reuse/EditBtns";
import Color from "../reuse/Color";
import AddColor from '../Forms/AddColor';

interface Props {
    room: any;
    projectId: any;
}


export default function RoomName ({room, projectId}: Props)  {

    return (
        <div>
            <div className="roomHead">
                <h2 className="h5 roomName">{room.roomName}</h2>
                <EditBtns obj={room} /> 
            </div>
            <div className="colorWrap">
                {room.colors.map((color: any) => (
                    <Color key={color.colorId} color={color} />
                ))}
                            <button className="btn btn-primary bt-lg" onClick={() => store.dispatch(addColorInRoom(true))}>+</button>
                {store.getState().addColorInRoom && 
                    <AddColor projectId={projectId} roomId={room._id}/>}
            </div>

        </div>
    )
}