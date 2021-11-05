import React, { useState } from 'react';
import AddOptions from './AddOptions';

interface State {
    showOptions: boolean
}

export default function NewObjectBtn ({}, state: State) {
    
    const [showOptions, setShowOptions] = useState(false);

    return (
        <>
            <i className="fas fa-plus-circle fa-3x addBtn" onClick={() => setShowOptions(!showOptions)}></i>
            {showOptions && <AddOptions callback={hide => setShowOptions(hide)} /> }
        </>
    )
}