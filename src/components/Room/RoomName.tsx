import React, { useState } from 'react';
import EditBtns from "../reuse/EditBtns";
import Color from "../reuse/Color";
import AddColor from '../Forms/AddColor';

interface Props {
    room: any;
    projectId: any;
}

interface State {
    addColor: boolean; 
}

export default function RoomName ({room, projectId}: Props, state: State)  {
    
    const [addColor, setAddColor] = useState(false);
console.log('room', room);
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
                <button className="btn btn-primary bt-lg" onClick={() => setAddColor(!addColor)} >+</button>
                {addColor && <AddColor projectId={projectId} roomId={room._id}/>}
            </div>
        </div>
    )
}