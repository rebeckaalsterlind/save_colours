import EditBtns from "../reuse/EditBtns";
import Color from "../reuse/Color";

interface Props {
    room: any
}

export default function RoomName ({room}: Props)  {
    
    return (
        <div>
            <header>
                <h5 style={{display: 'inline'}}>{room.roomName}</h5>
                <EditBtns obj={room} /> 

            </header>
            {room.colors.map((color: any) => (
                <Color key={color.colorId} color={color} />
            ))}
        </div>
    )
}