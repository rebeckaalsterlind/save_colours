import React, { useState } from 'react';
import AddOptions from './AddOptions';

interface State {
    showOptions: boolean
}

export default function NewObjectBtn ({}, state: State) {
    
    const [showOptions, setShowOptions] = useState(false);

    return (
        <>
            <button onClick={() => setShowOptions(!showOptions)}>+</button>
            {showOptions && <AddOptions callback={hide => setShowOptions(hide)} /> }
        </>
    )
}