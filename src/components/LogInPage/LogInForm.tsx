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
    const inputRef: any = useRef(null);

    //set the focus on username input
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    //check user agains database
    const handleSubmit = (evt: React.FormEvent) => {
        evt.preventDefault();

        fetch("https://mads-colour-backend.herokuapp.com/api/users/login", {
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

                if (response.username) {
                    store.dispatch(logIn({ isTrue: true, username: response.username, user: response }));
                    console.log(response);

                    localStorage.setItem('userId', response._id);
                } else {
                    setErrorText(true)
                }

            })
    }

    return (
        <main className="form-signin">
            <form className="d-grid col-6 mx-auto" onSubmit={handleSubmit}>
                {errorText && (<p>Fel användarnamn eller lösenord</p>)}
                <h1 className="h4 mb-3 fw-normal h4-login">Logga in</h1>
                <div className="form-floating">
                    <input
                        className="form-control inputfield"
                        id="floatingUsername"
                        ref={inputRef}
                        type="text"
                        placeholder="Användarnamn"
                        required
                        onChange={(evt) => setUsername(evt.target.value)}
                    />
                    <label htmlFor="floatingUsername">Användarnamn</label>
                </div>
                <div className="form-floating">
                    <input
                        className="form-control inputfield"
                        id="floatingPassword"
                        type="password"
                        placeholder="Lösenord"
                        required
                        onChange={(evt) => setPassword(evt.target.value)}
                    />
                    <label htmlFor="floatingPassword">Lösenord</label>
                </div>
                <button className="btn btn-primary primary-btn">Logga in</button>
            </form>
        </main>
    );
}
