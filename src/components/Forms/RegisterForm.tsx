import React, { useState, useEffect, useRef } from 'react';

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

    const inputRef:any = useRef(null);

    //set the focus on username input
    useEffect(() => {
      inputRef.current.focus();
    }, [])
  
    const handleSubmit = (evt:React.FormEvent):void => {
        evt.preventDefault();
        
        //new user data
        setNewUser({username: username, email: email, password: password})
        
        //callback to hide reg form
        toggle(false)
    }

    return (

        <form className="d-grid col-6 mx-auto" onSubmit={handleSubmit}>
            <p onClick={() => toggle(false)}>&larr; </p>
            <input className="form-control inputfield" ref={inputRef} type="text" placeholder="Användarnamn" required onChange={(evt) => setUsername(evt.target.value)}/> <br />
            <input className="form-control inputfield" type="email" placeholder="Email" required onChange={(evt) => setEmail(evt.target.value)} /> <br />
            <input className="form-control inputfield" type="text" placeholder="Lösenord" required onChange={(evt) => setPassword(evt.target.value)} /> <br />
            <button className="btn btn-primary primary-btn" >Spara</button>
        </form>
    )
}