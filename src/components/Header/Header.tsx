import { store } from '../../store';
import LogOutBtn from "./LogOutBtn";
import * as banner from '../../img/color-app-icon.png';

// {store.getState().username}

export default function Header() {
    const img = banner.default;
    return (
        <header>
            <div className="imgContainer">
                <img src={img} alt="colorkeeper logotype" className="img-fluid logo" />
            </div>
            <div className="userInfoContainer">
                    <p className="h5">{store.getState().username}</p>
                    <LogOutBtn />
            </div>
        </header>
    )
}