import React, { useState, useEffect, useRef } from 'react';
import { store } from '../../store';
import { addProject } from '../../actions';
import AddColor from './AddColor';
import AddRoom from './AddRoom';
import { ObjectBindingOrAssignmentElement } from 'typescript';

interface State {
  projectName: string,
  newProject: Object,
  newRoom: boolean,
  newColor: boolean
}

export default function AddProject({ }, state: State) {

  const [projectName, setProjectName] = useState("");
  const [newProject, setNewProject] = useState({});
  const [newRoom, setNewRoom] = useState(false);
  const [newColor, setNewColor] = useState(false);

  const inputRef: any = useRef(null);

  //set the focus on username input
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    const id = Math.floor(Math.random() * 10000) + 1;

    setNewProject(
      {
        _id: id,
        projectName: projectName,
        rooms: []
      }
    );

    const projectToAdd: Object = {
      "projectName": projectName,
      "rooms": []
    }

    const user = store.getState().user._id;

    fetch(`https://mads-colour-backend.herokuapp.com/api/users/${user}/projects`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: 
      JSON.stringify(projectToAdd) 
    })
      .then(async response => response.json())
      .then(response => {

        if(response) {
          console.log('Response from backend: ', response);
        }
    })

    store.dispatch(addProject(false));

  }

  const show = (evt: React.MouseEvent): void => {
    const { target } = evt;

    switch ((target as HTMLParagraphElement).id) {
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
      <p onClick={() => store.dispatch(addProject(false))}>&larr; </p>
      <h5>Nytt projekt:</h5>
      <input className="form-control inputfield" ref={inputRef} type="text" placeholder="Namn" onChange={(evt) => setProjectName(evt.target.value)} />
      <p id="room" onClick={show} ><span>{newRoom ? "-" : "+"}</span> Lägg till rum</p>
      {newRoom && <AddRoom />}
      <p id="color" onClick={show} ><span>{newColor ? "-" : "+"}</span> Lägg till färg</p>
      {newColor && <AddColor />}
      <button className="btn btn-primary primary-btn">Spara projekt</button>
    </form>
  )
}
