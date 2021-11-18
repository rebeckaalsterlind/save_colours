import { store } from '../../store';
import LogOutBtn from "./LogOutBtn";
import * as banner from '../../img/color-app-icon.png';
import { useState } from 'react';
import DeleteUserModal from '../reuse/DeleteUserModal';

interface State {
    isShown: boolean
}


export default function Header({}, state: State) {

    const img = banner.default;
    const [isShown, setIsShown] = useState(false)

    const clickHandler = () => { 
        setIsShown(false)
    }

    return (
        <header>
            <div className="imgContainer">
                <img src={img} alt="colorkeeper logotype" className="img-fluid logo" />
            </div>
            <div className="userInfoContainer">
                    <p onClick={()=> setIsShown(true)} className="h5">{store.getState().username}</p>
                    {isShown && <DeleteUserModal callback={hide => setIsShown(hide)} /> }
                    <LogOutBtn />
            </div>
        </header>
    )
}