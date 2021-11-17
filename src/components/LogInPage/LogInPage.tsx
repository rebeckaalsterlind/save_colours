import React, { useState } from 'react';import Logo from './Logo';
import LogInForm from './LogInForm';
import RegisterForm from '../Forms/RegisterForm';

interface State {
    showRegister: boolean;
}

export default function LogInPage ({}, state: State) {

    const [showRegister, setShowRegister] = useState(false);
    const [errorText, setErrorText] = useState(false);

    return (
        <div className="loginPage">
            <Logo />
            {!showRegister 
                ? <>
                    <LogInForm /> 
                    <div  className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-secondary" onClick={ () => setShowRegister(true)}>Registrera</button>
                    </div>
                    <button type="button" className="btn btn-link">Glömt lösenordet?</button>
                 </>
                : <RegisterForm toggle={hideRegister => setShowRegister(hideRegister)}/> 
            }
        </div>
    )
}