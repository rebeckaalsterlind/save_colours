import React, { useState } from 'react';import Logo from './Logo';
import LogInForm from './LogInForm';
import SecondaryBtn from '../reuse/SecondaryBtn';
import RegisterForm from '../Forms/RegisterForm';
import TextBtn from '../reuse/TextBtn';

interface State {
    showRegister: boolean,
}

export default function LogInPage ({}, state: State) {

    const [showRegister, setShowRegister] = useState(false);

    return (
        <div>
            <Logo />
            {!showRegister 
                ? <>
                    <LogInForm /> 
                    <div  className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary white-btn " onClick={ () => setShowRegister(true)}>Registrera</button>
                    </div>
                    <TextBtn innerText="Glömt lösenord?" /> 
                 </>
                : <RegisterForm toggle={hideRegister => setShowRegister(hideRegister)}/> 
            }
        </div>
    )
}