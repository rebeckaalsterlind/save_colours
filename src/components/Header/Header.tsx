import { store } from '../../store';
import LogOutBtn from "./LogOutBtn";

export default function Header() {
    return (
        <div className="container cont-1">
            <div className="row">
                <div className="col">
                    <p >{store.getState().username}</p>
                </div>
                <div className="col" >
                    <LogOutBtn />
                </div>
            </div>
        </div>
    )
}