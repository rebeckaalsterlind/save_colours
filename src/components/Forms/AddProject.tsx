import React, { useState } from 'react';
import { store } from '../../store';
import { addProject } from '../../actions';
import AddColor from './AddColor';
import AddRoom from './AddRoom';

interface State {
  projectName: string, 
  newProject: Object,
  newRoom: boolean,
  newColor: boolean
}

export default function AddProject({}, state: State ) {

  const [projectName, setProjectName] = useState("");
  const [newProject, setNewProject] = useState({});
  const [newRoom, setNewRoom] = useState(false);
  const [newColor, setNewColor] = useState(false);

  const handleSubmit = (evt:React.FormEvent) => {
    evt.preventDefault();
    const id = Math.floor(Math.random() * 10000) + 1;

    setNewProject(
      {
        projectId: id,
        projectName: projectName,
        rooms: []
      }
    );

    store.dispatch(addProject(false));

  }

  const show = (evt:React.MouseEvent):void => {
    const { target } = evt;

    switch((target as HTMLParagraphElement).id) {
      case "room":
        setNewRoom(!newRoom)
        setNewColor(false)
      break; 
  
      case "color":
        setNewColor(!newColor)
        setNewRoom(false)
      break; 
    }

  }

  return (
    <form className="d-grid col-6 mx-auto" onSubmit={handleSubmit}>
      <h5>Nytt projekt:</h5>
      <input className="form-control inputfield" type="text" placeholder="Namn" onChange={ (evt) => setProjectName(evt.target.value)} />
      <p id="room" onClick={show} ><span>{newRoom ? "-" : "+" }</span> Lägg till rum</p>
      {newRoom && <AddRoom />}
      <p id="color" onClick={show} ><span>{newColor ? "-" : "+" }</span> Lägg till färg</p>
      {newColor && <AddColor />}
      <button className="btn btn-primary primary-btn">Spara projekt</button>
    </form>
  )
}
