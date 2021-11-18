import { useState } from 'react';
import '../MainApp/addOptions.css';
import { store } from '../../store';
import { store as reduxStore } from '../../store';
import { deleteObject } from '../../actions';


interface Props {
    callback(hideComponent: boolean): void;
}

const DeleteUserModal = ({ callback }: Props) => {

    const user = store.getState().user._id;

    let name: string = "";


    const handleClick = (
        evt: React.MouseEvent<HTMLParagraphElement, MouseEvent>
    ) => {
        const { target } = evt;

        switch ((target as HTMLParagraphElement).id) {
            case 'wrapper':
                callback(false);
                console.log(user);
                break;

            case "yes":
                deleteProject();
                break;
                

            case 'no':
                callback(false);
                break;
        }
    };


    const deleteProject = () => {

        fetch(`https://mads-colour-backend.herokuapp.com/api/users/${user}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(response => {


                const updatedUser = reduxStore.getState().user;

                reduxStore.dispatch(deleteObject({ user: updatedUser }));

            })
    }

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