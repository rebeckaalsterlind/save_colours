import React, { useState } from 'react';
import Project from "./Project";
import Allcolors from "./Allcolors";

interface State {
    toggleMenu: boolean
}

export default function ProjectsWrapper ({}, state: State) {

    const [toggleMenu, setToggleMenu] = useState(true);
    const [colors, setcolors] = useState();

   const getColors:any = (array:any) => {
    setcolors(array);
    }

    return (
        <div>
            <button onClick={() => setToggleMenu(true)}>Projekt</button>
            <button onClick={() => setToggleMenu(false)}>Färger</button>
            {toggleMenu 
                ? <Project  colors={getColors} />
                :  <Allcolors sendColors={colors}/>
            }
        </div>
    )
}