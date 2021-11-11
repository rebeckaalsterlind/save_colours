import React, { useState } from 'react';
import { store } from '../../store';

interface Props {
    // callback(hideComponent: boolean): void;
    _id: string;
    setShowRoom: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddRoomToProject({ _id, setShowRoom }: Props) {
    return (
        <div onClick={() => setShowRoom(false)}>
            <div id="wrapper" className="modal-wrapper">
                <div id="box" className="modal-box p-3">
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={() => setShowRoom(false)}
                    ></button>
                    <form>
                        <div className="form-group">
                            <label htmlFor="roomName">rumnamn:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="roomName"
                                aria-describedby="namn på rum"
                                placeholder="Namn på rum"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Spara
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
