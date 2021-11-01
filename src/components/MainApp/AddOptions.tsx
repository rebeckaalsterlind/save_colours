import React, { useState } from 'react';
import AddColor from '../Forms/AddColor';
import AddProject from '../Forms/AddProject';

interface State {
  project: boolean,
  color: boolean
}

export default function AddOptions ({}, state: State) {
  
    const [project, setProject] = useState(false);
    const [color, setColor] = useState(false);

    const add = (evt:React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        const { target } = evt;

        switch ((target as HTMLParagraphElement).id) {
            case "addColor":
              setColor(true)
              setProject(false)
            break; 

            case "addProject":
              setProject(true)
              setColor(false)
            break; 
        }

    }

    return (

        <div>
          {!project && !color &&
            <>
              <p id="addColor" onClick={add}>Lägg till ny färg</p>
              <p id="addProject" onClick={add}>Lägg till nytt projekt</p>
            </>
          }
          {project && <AddProject />}
          {color && <AddColor />}
        </div>
 
    )
}