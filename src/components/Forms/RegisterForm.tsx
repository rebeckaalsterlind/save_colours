import React, { useState, useEffect, useRef } from 'react';
import { store } from '../../store';
import { logIn } from '../../actions';

interface Props {
    toggle(state: boolean): void;
}

interface State {
    username: string;
    email: string;
    password: string;
    errorText: boolean;
}

export default function RegisterForm({ toggle }: Props, state: State) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState(false)


    const inputRef: any = useRef(null);

    //set the focus on username input
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (evt: React.FormEvent): void => {
        evt.preventDefault();

        fetch("https://mads-colour-backend.herokuapp.com/api/users/register", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        })
        .then(res => res.json())
        .then(response => {
 
            if(response.username) {
                store.dispatch(logIn({ isTrue: true, username: response.username, user: response }));
                localStorage.setItem('userId', response._id); 
                //callback to hide reg form
                toggle(false);
            } else {
                setErrorText(true)
            }

        })



    };

    return (
        <main className="form-signin">
            <form className="d-grid col-6 mx-auto" onSubmit={handleSubmit}>
            {errorText && (<p>Användarnamn eller email är upptaget</p>)}
                <div className="form-floating">
                    <input 
                        className="form-control inputfield"
                        id="regUsername"
                        ref={inputRef}
                        type="text"
                        placeholder="Användarnamn"
                        required
                        onChange={(evt) => setUsername(evt.target.value)}
                    />
                    <label htmlFor="regUsername">Användarnamn</label>
                </div>
                <div className="form-floating inputfield">
                    <input
                        className="form-control inputfield"
                        id="regMail"
                        type="email"
                        placeholder="Email"
                        required
                        onChange={(evt) => setEmail(evt.target.value)}
                    />
                    <label htmlFor="regMail">E-mail</label>
                </div>
                <div className="form-floating">
                    <input
                        className="form-control inputfield"
                        id="regPassword"
                        type="password"
                        placeholder="Lösenord"
                        required
                        onChange={(evt) => setPassword(evt.target.value)}
                    />
                    <label htmlFor="regPassword">Lösenord</label>
                </div>
                <button className="btn btn-primary primary-btn">Spara</button>
                <button className="btn btn-secondary" onClick={() => toggle(false)}>Tillbaka</button>
            </form>
        </main>
    );
}
