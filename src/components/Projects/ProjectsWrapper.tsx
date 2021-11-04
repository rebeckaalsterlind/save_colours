import React, { useState } from 'react';
import Project from "./Project";
import Allcolors from "./Allcolors";

interface State {
    toggleMenu: boolean
}

export default function ProjectsWrapper ({}, state: State) {

    const [toggleMenu, setToggleMenu] = useState(true);
    const [projectPage, setProjectPage] = useState(true);
    const [colorpage, setcolorpage] = useState(false);
    const [colors, setcolors] = useState();

   const getColors:any = (array:any) => {
    setcolors(array);
    }


    return (
        <div>
          
            <button onClick={() => {setToggleMenu(true); setProjectPage(true); setcolorpage(false)}} className= {projectPage ? "activeBtn" : "notActiveBtn"}>Projekt</button>
            <button  onClick={() => {setToggleMenu(false); setcolorpage(true); setProjectPage(false)}} className={colorpage ? "activeBtn" : "notActiveBtn"}>Färger</button>
            {toggleMenu 
                ? <Project  colors={getColors} />
                :  <Allcolors sendColors={colors}/>
            }
        </div>
    )
}