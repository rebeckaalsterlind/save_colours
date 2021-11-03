import React, { useState } from 'react';
import PrimaryBtn from "../reuse/PrimaryBtn";


interface Props {
    toggle(state: boolean):void
}

interface State {
    username: string,
    email: string,
    password: string,
    newUser: Object
}

export default function RegisterForm ({toggle}: Props, state: State) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useState({})

    const handleSubmit = (evt:React.FormEvent):void => {
        evt.preventDefault();
        
        //new user data
        setNewUser({username: username, email: email, password: password})
        
        //callback to hide reg form
        toggle(false)
    }

    return (
        <form  className="d-grid col-6 mx-auto" onSubmit={handleSubmit}>
            <input type="text"  className="form-control inputfield" placeholder="Användarnamn" required onChange={(evt) => setUsername(evt.target.value)}/> <br />
            <input type="email" className="form-control inputfield" placeholder="Email" required onChange={(evt) => setEmail(evt.target.value)} /> <br />
            <input type="text" className="form-control inputfield" placeholder="Lösenord" required onChange={(evt) => setPassword(evt.target.value)} /> <br />
            <button className="btn btn-primary primary-btn">Spara</button>
        </form>
    )
}