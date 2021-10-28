import ProjectName from "./ProjectName"
import Room from "../Room/Room"

export default function Project () {
    return (
        <div>
            <ProjectName /> // prop: name
            // map room
            <Room />
        </div>
    )
}