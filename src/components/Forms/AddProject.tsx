import React, { useState } from 'react'

interface State {
  projectName: string, 
  newProject: Object
}

export default function AddProject({}, state: State ) {

  const [projectName, setProjectName] = useState("");
  const [newProject, setNewProject] = useState({});

  const handleSubmit = (evt:React.FormEvent) => {
    evt.preventDefault();
    const id = Math.floor(Math.random() * 10000) + 1;

    setNewProject(
      {
        projectId: id,
        projectName: projectName,
        rooms: []
      }
    )

  }

  return (
    <form onSubmit={handleSubmit}>
      <h5>Nytt projekt:</h5>
      <input type="text" placeholder="Namn" onChange={ (evt) => setProjectName(evt.target.value)} />
      <button>Spara</button>
    </form>
  )
}
