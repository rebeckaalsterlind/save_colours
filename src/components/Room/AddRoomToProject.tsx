import React, { useState } from 'react';
import { store } from '../../store';
import { setRoomId } from '../../actions';

interface Props {
    projectid: string;
    onHideModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddRoomToProject({ projectid, onHideModal }: Props) {
    const [roomName, setRoomName] = useState('');

    //on click outside => close modal
    const handleDivClick = (
        evt: React.MouseEvent<HTMLParagraphElement, MouseEvent>
    ) => {
        const { target } = evt;

        if ((target as HTMLParagraphElement).id === 'wrapper') {
            onHideModal(false);
        }
    };

    const saveRoomToBacken = () => {
        const userid = store.getState().user._id;
        return fetch(
            `https://mads-colour-backend.herokuapp.com/api/users/${userid}/projects/${projectid}/rooms`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ roomName }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                store.dispatch(setRoomId(data._id));
                updateProject(data._id);
            });
    };

    const updateProject = (id: any) => {
        store
            .getState()
            .user.projects.find((project: any) => project._id === projectid)
            .rooms.push({ roomName, _id: id, colors: [] });
        onHideModal(false);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        saveRoomToBacken();
    };

    return (
        <div id="wrapper" className="modal-wrapper" onClick={handleDivClick}>
            <div id="box" className="modal-box p-4">
                <div>
                    <button
                        type="button"
                        className="btn-close mt-1"
                        aria-label="Close"
                        onClick={() => onHideModal(false)}
                    ></button>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="roomName">Skapa nytt rum:</label>
                        <input
                            type="text"
                            className="form-control "
                            id="roomName"
                            aria-describedby="namn på rum"
                            placeholder="Namn på rum"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Spara
                    </button>
                </form>
            </div>
        </div>
    );
}
