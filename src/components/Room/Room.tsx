import RoomName from "./RoomName"
import RoomColors from "./RoomColors"

interface Props{
project: any; 
}

interface State {

}

export default function Room ({ project }: Props, state: State) {

    console.log("project in room.tsx", project);
    
    return (
        <div>
            <RoomName />
            <RoomColors />
        </div>
    )
}