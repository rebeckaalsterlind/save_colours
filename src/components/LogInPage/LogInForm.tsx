import PrimaryBtn from "../reuse/PrimaryBtn"
import React, { useState } from 'react';

interface State {
    username: string,
    password: string
}

export default function LogInForm ({}, state: State) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        <form>
            <input type="text" placeholder="Användarnamn" onChange={(evt) => setUsername(evt.target.value)} /> <br />
            <input type="text" placeholder="Lösenord" onChange={(evt) => setPassword(evt.target.value) }/>
            <PrimaryBtn innerText="Logga in" /> 
        </form>
    )
}