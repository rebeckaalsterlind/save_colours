import React, { useState } from 'react';
import Project from "./Project";

interface State {
    toggleMenu: boolean
}

export default function ProjectsWrapper ({}, state: State) {

    const [toggleMenu, setToggleMenu] = useState(true);

    return (
        <div>
            <button onClick={() => setToggleMenu(true)}>Projekt</button>
            <button onClick={() => setToggleMenu(false)}>Färger</button>
            {toggleMenu 
                ? <Project />
                : <p>mappa ut/lista alla färger här</p>
            }
        </div>
    )
}