import React, { useState } from 'react';
import Project from "./Project";

interface State {
    toggleMenu: boolean
}

export default function ProjectsWrapper ({}, state: State) {

    const [toggleMenu, setToggleMenu] = useState(true);
    const [project, setProject] = useState(true);
    const [colors, setColors] = useState(false);

    return (
        <div>
          
            <button onClick={() => {setToggleMenu(true); setProject(true); setColors(false)}} className= {project ? "activeBtn" : "notActiveBtn"}>Projekt</button>
            <button  onClick={() => {setToggleMenu(false); setColors(true); setProject(false)}} className={colors ? "activeBtn" : "notActiveBtn"}>Färger</button>
            {toggleMenu 
                ? <Project />
                : <p>mappa ut/lista alla färger här</p>
            }
        </div>
    )
}