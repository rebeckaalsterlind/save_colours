import Logo from './Logo';
import LogInForm from './LogInForm';
import SecondaryBtn from '../reuse/SecondaryBtn';
import RegisterForm from '../RegisterForm/RegisterForm';
import TextBtn from '../reuse/TextBtn';

export default function LogInPage () {
    return (
        <div>
            <Logo />
            // If !register
            <LogInForm />

            <SecondaryBtn /> // Prop: register, behaviour
            // If register
            <RegisterForm />
            
            <TextBtn /> // Prop: forgot pass txt, mock behaviour
        </div>
    )
}