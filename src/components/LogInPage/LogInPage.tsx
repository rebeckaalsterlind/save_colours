import React, { useState } from 'react';import Logo from './Logo';
import LogInForm from './LogInForm';
import RegisterForm from '../Forms/RegisterForm';
import TextBtn from '../reuse/TextBtn';
import CompColors from '../reuse/CompColors';

interface State {
    showRegister: boolean,
}

export default function LogInPage ({}, state: State) {
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div className="loginPage">
            <Logo />
            {!showRegister 
                ? <>
                    <LogInForm /> 
                    <div  className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-secondary" onClick={ () => setShowRegister(true)}>Registrera</button>
                    </div>
                    {/* <TextBtn innerText="Glömt lösenord?" />  */}
                    <button type="button" className="btn btn-link">Glömt lösenordet?</button>
                 </>
                : <RegisterForm toggle={hideRegister => setShowRegister(hideRegister)}/> 
            }
            {/* <CompColors /> */}
        </div>
    )
}