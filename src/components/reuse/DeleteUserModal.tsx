import { useState } from 'react';
import '../MainApp/addOptions.css';

interface Props {
    callback(hideComponent: boolean): void;
}

const DeleteUserModal = ({ callback }: Props) => {

    const handleClick = (
        evt: React.MouseEvent<HTMLParagraphElement, MouseEvent>
    ) => {
        const { target } = evt;

        switch ((target as HTMLParagraphElement).id) {
            case 'wrapper':
                callback(false);
                break;

            case 'yes':
                callback(true);
                break;

            case 'no':
                callback(false);
                break;
        }
    };


    return (
        <div
            id="wrapper"
            className="modal-wrapper"
            onClick={handleClick}
        >
            <div id="box" className="modal-box deleteChoiceModal">
                <p className="askDeleteText">Vill du radera ditt konto?</p>
                <div className="deleteChoiceBtnGroup">
                    <button id="yes" className="btn btn-secondary" >Ja</button>
                    <button id="no" className="btn btn-primary" >Nej</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteUserModal;