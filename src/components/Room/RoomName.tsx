import EditBtns from "../reuse/EditBtns";
import Color from "../reuse/Color";

interface Props {
    room: any
}

export default function RoomName ({room}: Props)  {
    
    return (
        <div>
            <div>
                <h2 className="roomName">{room.roomName}</h2>
                <EditBtns obj={room} /> 
            </div>
            {room.colors.map((color: any) => (
                <Color key={color.colorId} color={color} />
            ))}
        </div>
    )
}