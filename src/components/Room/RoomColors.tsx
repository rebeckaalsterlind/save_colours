import Color from "../reuse/Color"
import ColorInfo from "../reuse/ColorInfo"

export default function RoomColors () {
    return (
        <div>
            // map colors
            <Color /> // onclick show info, toggle show state
            <ColorInfo /> // toggled information about color
        </div>
    )
}