import PrimaryBtn from "../reuse/PrimaryBtn"
import React, { useState, useRef, useEffect } from 'react';
import { store } from '../../store';
import { logIn } from '../../actions';
import data from "../../mockdata.json";

interface State {
    username: string,
    password: string,
    user: object,
}

export default function LogInForm({ }, state: State) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const [errorText, setErrorText] = useState(false);
    const inputRef:any = useRef(null);

    //set the focus on username input
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleSubmit = (evt: React.FormEvent) => {
        evt.preventDefault();

        if (username === data.username && password === data.password) {

            //user data to send to db
            setUser({ username: username, password: password })
            
            //send logged-in state to redux. Answer (true/false) should come from db
            const DBloginResponse: boolean = true;
            store.dispatch(logIn({ isTrue: DBloginResponse, username: username }))
        } else {
            setErrorText(true)
        }
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