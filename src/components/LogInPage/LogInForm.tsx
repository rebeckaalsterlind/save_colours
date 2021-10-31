import PrimaryBtn from "../reuse/PrimaryBtn"
import React, { useState } from 'react';
import { store } from '../../store';
import { logIn } from '../../actions';


interface State {
    username: string,
    password: string,
    user: object,
}

export default function LogInForm ({}, state: State) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});

    const handleSubmit = (evt:React.FormEvent) => {
        evt.preventDefault();
        
        //user data to send to db
        setUser({username: username, password: password})

        //send logged-in state to redux. Answer (true/false) should come from db
        const DBloginResponse: boolean = true;
        store.dispatch(logIn({isTrue: DBloginResponse, username: username}))
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Användarnamn" required onChange={(evt) => setUsername(evt.target.value)} /> <br />
            <input type="text" placeholder="Lösenord" required onChange={(evt) => setPassword(evt.target.value) }/> <br />
            <button>Logga in</button>
           
        </form>
    )
}