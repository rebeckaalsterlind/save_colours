import { store } from '../../store';
import LogOutBtn from "./LogOutBtn";
import * as banner from '../../img/color-app-icon.png';
import { useState } from 'react';
import DeleteUserModal from '../reuse/DeleteUserModal';


export default function Header() {

    const img = banner.default;
    const [isShown, setIsShown] = useState(false)


    return (
        <header>
            <div className="imgContainer">
                <img src={img} alt="colorkeeper logotype" className="img-fluid logo" />
            </div>
            <div className="userInfoContainer">
                    <p onClick={()=> setIsShown(true)} className="h5">{store.getState().username}</p>
                    {isShown && <DeleteUserModal />}
                    <LogOutBtn />
            </div>
        </header>
    )
}