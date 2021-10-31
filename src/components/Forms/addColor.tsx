import React, { useState } from 'react'

interface State {
  name: string, 
  code: string,
  type: string,
  gloss: string,
  comment: string,
  store: string,
  project: string,
  room: string,
  newColor: Object
}

export default function addColor({}, state: State ) {

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [type, setType] = useState("");
  const [gloss, setGloss] = useState("");
  const [comment, setComment] = useState("");
  const [store, setStore] = useState("");

  const [project, setProject] = useState("");
  const [room, setRoom] = useState("");
  const [newColor, setNewColor] = useState({})

  const handleSubmit = (evt:React.FormEvent) => {
    evt.preventDefault();
    const id = Math.floor(Math.random() * 10000) + 1;

    setNewColor(
      {
        projectId: project,
        roomId: room,
        color: {
          colorId: id,
          colorName: name,
          colorCode: code,
          colorType: type,
          gloss: gloss,
          comment: comment,
          store: store
        }
      }
    )

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Namn" onChange={ (evt) => setName(evt.target.value)} />
      <input type="text" placeholder="NCS-kod" onChange={ (evt) => setCode(evt.target.value)} />
      
      <label htmlFor="type">Typ av färg:</label>
      <select name="type" id="type" onChange={ (evt) => setType(evt.target.value)} >
        <option value="">--Välj en typ--</option>
        <option value="roof">Tak</option>
        <option value="wall">Vägg</option>
        <option value="floor">Golv</option>
        <option value="carpentry">Snickeri</option>
        <option value="floor">Övrigt</option>
      </select>

      <label htmlFor="finish">Finish:</label>
      <select name="finish" id="finish" onChange={ (evt) => setGloss(evt.target.value)} >
        <option value="">--Välj en finish--</option>
        <option value="Gloss">Blank</option>
        <option value="SemiGloss">Halvblank</option>
        <option value="Matt">Matt</option>
        <option value="SemiMatt">Halvmatt</option>
        <option value="Other">Annan</option>
      </select>

      <input type="text" placeholder="Kommentar" onChange={ (evt) => setComment(evt.target.value)} />
      <input type="text" placeholder="Butik" onChange={ (evt) => setStore(evt.target.value)} />

      <label htmlFor="project">Project:</label>
      <select name="project" id="project" onChange={ (evt) => setProject(evt.target.value)}>
      {/* map projects here. value should be projectId, innerText should be projectName */}
      </select>

      <label htmlFor="room">Room:</label>
      <select name="room" id="room" onChange={ (evt) => setRoom(evt.target.value)}>
      {/* map rooms here. value should be roomId, innerText should be roomName */}
      </select>

      <button>Spara</button>
    </form>
  )
}
