import React, { useState, useEffect, useRef } from 'react';

interface Props {
    toggle(state: boolean): void;
}

interface State {
    username: string;
    email: string;
    password: string;
    newUser: Object;
}

export default function RegisterForm({ toggle }: Props, state: State) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newUser, setNewUser] = useState({});

    const inputRef: any = useRef(null);

    //set the focus on username input
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (evt: React.FormEvent): void => {
        evt.preventDefault();

        //new user data
        setNewUser({ username: username, email: email, password: password });

        //callback to hide reg form
        toggle(false);
    };

    return (
<<<<<<< HEAD
        <form className="d-grid col-6 mx-auto" onSubmit={handleSubmit}>
            <p onClick={() => toggle(false)}>&larr; </p>
            <input
                className="form-control inputfield"
                ref={inputRef}
                type="text"
                placeholder="Användarnamn"
                required
                onChange={(evt) => setUsername(evt.target.value)}
            />
            <br />
            <input
                className="form-control inputfield"
                type="email"
                placeholder="Email"
                required
                onChange={(evt) => setEmail(evt.target.value)}
            />
            <br />
            <input
                className="form-control inputfield"
                type="password"
                placeholder="Lösenord"
                required
                onChange={(evt) => setPassword(evt.target.value)}
            />
            <br />
            <button className="btn btn-primary primary-btn">Spara</button>
        </form>
    );
}
=======
        <main className="form-signin">
            <form className="d-grid col-6 mx-auto" onSubmit={handleSubmit}>
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
                        type="text" placeholder="Lösenord"
                        required
                        onChange={(evt) => setPassword(evt.target.value)}
                    />
                    <label htmlFor="regPassword">Lösenord</label>
                </div>
                <button className="btn btn-primary primary-btn">Spara</button>
                <button className="btn btn-secondary" onClick={() => toggle(false)}>Tillbaka</button>
            </form>
        </main>
<<<<<<< HEAD
    )
}
>>>>>>> 62d9a87 (Changes secondary button colors and formats register page + removes back arrow and adds back button)
=======
    );
}
>>>>>>> 4e9136e (Fixes formatting)
