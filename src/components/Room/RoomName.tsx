import EditBtns from "../reuse/EditBtns";
import Color from "../reuse/Color";

interface Props {
    room: any
}

export default function RoomName ({room}: Props)  {
    
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
            </div>
        </div>
    )
}