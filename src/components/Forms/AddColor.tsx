import React, { useState, useEffect, useRef } from 'react';
import { store as reduxStore } from '../../store';
import { addColor as reduxAddColor, saveColor } from '../../actions';

interface State {
    selectedProject: any;
    project: any;
    room: any;
    name: string;
    code: string;
    type: string;
    gloss: string;
    comment: string;
    store: string;
}

export default function AddColor({}, state: State) {
    
    const [selectedProject, setSelectedProject] = useState([]);
    
    const [project, setProject] = useState('');
    const [room, setRoom] = useState('');
   
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [type, setType] = useState('');
    const [gloss, setGloss] = useState('');
    const [comment, setComment] = useState('');
    const [store, setStore] = useState('');

    const inputRef: any = useRef(null);
    const allProjects = reduxStore.getState().user.projects;


    //set the focus on username input
    useEffect(() => {
        inputRef.current.focus();
    }, []);


    const handleSubmit = (evt: React.FormEvent) => {
        evt.preventDefault();

        let newColor = {
    
            colorName: name,
            colorCode: code,
            colorType: type,
            gloss: gloss,
            comment: comment,
            store: store
        
        };

       
        const userId = reduxStore.getState().user._id;
        fetch(`https://mads-colour-backend.herokuapp.com/api/users/${userId}/projects/${project}/rooms/${room}/colors`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newColor)
          })
        .then(async response => response.json())
        .then(response => {          
            if(response.colorName) {
               
                let foundProject = allProjects.find((p:any) => p._id === project)
                let foundRoom:any = foundProject.rooms.find((r:any) => r._id === room)
                foundRoom.colors.push(response);
      
                let updatedUser = reduxStore.getState().user;
                updatedUser.projects = allProjects;

               

                // //find room to push color into
                // let foundRoom:any = selectedProject.find( (selectedRoom:any) => selectedRoom._id === room );
                // foundRoom.colors.push(response);
                
                //redux add color to user object
                reduxStore.dispatch(saveColor({ user: updatedUser }));

                // set state to close addColor modal
                reduxStore.dispatch(reduxAddColor(false));
            };
        });

    };

    //use chosen project to map rooms in project as <options>
    useEffect(() => {

        if(project !== '') {
            const foundProject = allProjects.find( (selectedProject:any) => selectedProject._id === project );
            setSelectedProject(foundProject.rooms);
        };

    }, [project])

    return (
        <form className="d-grid col-6 mx-auto" onSubmit={handleSubmit}>
            <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => reduxStore.dispatch(reduxAddColor(false))}
            ></button>

            <h5>Ny färg:</h5>
            <input
                ref={inputRef}
                className="form-control inputfield"
                type="text"
                placeholder="Namn"
                onChange={(evt) => setName(evt.target.value)}
            />
            <br />

            <input
                type="text"
                className="form-control inputfield"
                placeholder="NCS-kod"
                onChange={(evt) => setCode(evt.target.value)}
            />
            <br />
            
            <select
                className="form-select inputfield"
                name="type"
                id="type"
                onChange={(evt) => setType(evt.target.value)}
            >
                <option value="">--Typ av Färg--</option>
                <option value="roof">Tak</option>
                <option value="wall">Vägg</option>
                <option value="floor">Golv</option>
                <option value="carpentry">Snickeri</option>
                <option value="floor">Övrigt</option>
            </select>
            <br />

            <select
                className="form-select inputfield"
                name="finish"
                id="finish"
                onChange={(evt) => setGloss(evt.target.value)}
            >
                <option value="">--Glans--</option>
                <option value="Gloss">Blank</option>
                <option value="SemiGloss">Halvblank</option>
                <option value="Matt">Matt</option>
                <option value="SemiMatt">Halvmatt</option>
                <option value="Other">Annan</option>
            </select>
            <br />

            <input
                type="text"
                className="form-control inputfield"
                placeholder="Kommentar"
                onChange={(evt) => setComment(evt.target.value)}
            />
            <br />

            <input
                type="text"
                className="form-control inputfield"
                placeholder="Butik"
                onChange={(evt) => setStore(evt.target.value)}
            />
            <br />

            <label htmlFor="project">Project:</label>
            <select
                className="form-select inputfield"
                name="project"
                id="project"
                onChange={(evt) => setProject(evt.target.value)}
            >
                  <option value="misc">--Välj projekt--</option>
                {reduxStore.getState().user.projects && reduxStore.getState().user.projects.map((project: any, index: number) => (
                    <option key={index} value={project._id}>{project.projectName}</option> ))
                }
            </select>
            <br />
            
            <label htmlFor="room">Room:</label>
            <select
                className="form-select inputfield"
                name="room"
                id="room"
                onChange={(evt) => setRoom(evt.target.value)}
            >
                <option value="misc">--Välj Rum--</option>
                {selectedProject.map((room: any, index:number) => (
                    <option key={index} value={room._id}>{room.roomName}</option>))
                }
            </select>
            <br />

            <button className="btn btn-primary primary-btn">Spara färg</button>
        </form>
    );
}
