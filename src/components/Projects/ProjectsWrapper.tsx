import React, { useState } from 'react';
import Project from "./Project";
import Allcolors from "./Allcolors";

interface State {
    toggleMenu: boolean,
    projectPage: boolean,
    colorPage: boolean,
    colors: any
}

export default function ProjectsWrapper ({}, state: State) {

    const [toggleMenu, setToggleMenu] = useState(true);
    const [projectPage, setProjectPage] = useState(true);
    const [colorPage, setColorPage] = useState(false);
    const [colors, setColors] = useState();

    const getColors:any = (array:any) => {
        setColors(array);   
    }
    
    return (
        <div>
          <button onClick={() => {setToggleMenu(true); setProjectPage(true); setColorPage(false)}} className= {projectPage ? "activeBtn" : "notActiveBtn"}>Projekt</button>
            <button  onClick={() => {setToggleMenu(false); setColorPage(true); setProjectPage(false)}} className={colorPage ? "activeBtn" : "notActiveBtn"}>Färger</button>
            {toggleMenu 
                ? <Project colors={getColors} />
                :  <Allcolors sendColors={colors}/>
            }
        </div>
    )
}