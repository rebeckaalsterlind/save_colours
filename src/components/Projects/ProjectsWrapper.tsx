import React, { useState } from 'react';
import Project from "./Project";
import Allcolors from "./Allcolors";
import Searchbar from '../reuse/Searchbar';

interface State {
    showSearch: boolean,
    toggleMenu: boolean,
    projectPage: boolean,
    colorPage: boolean,
    colors: any
}

export default function ProjectsWrapper ({}, state: State) {

    const [showSearch, setShowSearch] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(true);
    const [projectPage, setProjectPage] = useState(true);
    const [colorPage, setColorPage] = useState(false);
    const [colors, setColors] = useState();

    const getColors:any = (array:any) => {
        setColors(array);   
    }
    
    return (
        <div className="projectWrap">
            <button
                onClick={() => {
                    setToggleMenu(true);
                    setProjectPage(true);
                    setColorPage(false)}}
                className={
                    projectPage ?
                        "activeBtn btn btn-primary shadow-none"
                        :
                        "notActiveBtn btn btn-secondary shadow-none"
                    }
            >
                Projekt
            </button>
            <button
                onClick={() => {
                    setToggleMenu(false);
                    setColorPage(true);
                    setProjectPage(false)}}
                className={
                    colorPage ?
                        "activeBtn btn btn-primary shadow-none"
                        :
                        "notActiveBtn btn btn-secondary shadow-none"
                    }
            >
                Färger
            </button>
            {!showSearch 
            ? <i className="fas fa-search" onClick={() => setShowSearch(true)}></i>
            : < Searchbar hideSearchbar={() => setShowSearch(false)}/>}
            {toggleMenu 
                ? <Project colors={getColors} />
                :  <Allcolors sendColors={colors}/>
            }
           
        </div>
    )
}