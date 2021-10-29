import { store } from '../../store';
import LogOutBtn from "./LogOutBtn";

export default function Header () {
    return (
        <div>
            <p>{store.getState().username}</p>
            <LogOutBtn />
        </div>
    )
}