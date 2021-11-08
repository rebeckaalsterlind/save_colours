import React, { useState, useRef, useEffect } from 'react';
import { store } from '../../store';
import { logIn } from '../../actions';

interface State {
    username: string,
    password: string,
}

export default function LogInForm({ }, state: State) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorText, setErrorText] = useState(false);
    const inputRef:any = useRef(null);

    //set the focus on username input
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    //check user agains database
    const handleSubmit = (evt: React.FormEvent) => {
        evt.preventDefault();

        fetch("http://localhost:3000/api/users/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        .then(res => res.json())
        .then(response => {

            if(response.username) {
                store.dispatch(logIn({ isTrue: true, username: response.username, user: response }));
                localStorage.setItem('user', response.username);
            } else {
                setErrorText(true)
            }

        })
    }


    return (
        <form className="d-grid col-6 mx-auto" onSubmit={handleSubmit}>
             {errorText && (
                <p>Fel användarnamn eller lösenord</p>
            )}
            <input className="form-control inputfield"  ref={inputRef} type="text" placeholder="Användarnamn" required onChange={(evt) => setUsername(evt.target.value)} /> <br />
            <input  className="form-control inputfield" type="text" placeholder="Lösenord" required onChange={(evt) => setPassword(evt.target.value)} /> <br />
            <button  className="btn btn-primary primary-btn">Logga in</button>
            {/* <PrimaryBtn innerText="Logga in" /> */}
           
        </form>
    )
}