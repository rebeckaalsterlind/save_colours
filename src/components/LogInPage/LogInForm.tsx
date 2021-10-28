import PrimaryBtn from "../reuse/PrimaryBtn"
import React, { useState } from 'react';

interface Props {
    toggle(state: boolean):void
}

interface State {
    username: string,
    password: string,
    user: object,
}

export default function LogInForm ({toggle}: Props, state: State) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});

    const handleSubmit = (evt:React.FormEvent) => {
        evt.preventDefault();
        //user data to send to db
        setUser({username: username, password: password})

        //callback to set loggedin state. Answer (treu/false) should come from db
        toggle(false)

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Användarnamn" required onChange={(evt) => setUsername(evt.target.value)} /> <br />
            <input type="text" placeholder="Lösenord" required onChange={(evt) => setPassword(evt.target.value) }/> <br />
            <button>Logga in</button>
        </form>
    )
}