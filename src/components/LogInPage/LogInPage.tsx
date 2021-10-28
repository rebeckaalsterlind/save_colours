import React, { useState } from 'react';import Logo from './Logo';
import LogInForm from './LogInForm';
import SecondaryBtn from '../reuse/SecondaryBtn';
import RegisterForm from '../RegisterForm/RegisterForm';
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
                    <button onClick={ () => setShowRegister(true)}>Registrera dig</button>
                    <TextBtn innerText="Glömt lösenord?" /> 
                </>
                : <RegisterForm toggle={hideRegister => setShowRegister(hideRegister)}/> 
            }
        </div>
    )
}