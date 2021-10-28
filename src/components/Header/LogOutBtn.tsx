import TextBtn from "../reuse/TextBtn";
import { store } from '../../store';
import { logIn } from '../../actions';

export default function LogOutBtn () {

    const handleClick = () => {
        store.dispatch(logIn(false))
    }

    return (
        <>
        <button onClick={handleClick}>Logga ut</button>
        <div>
            <TextBtn innerText="Logga ut" /> 
        </div>
        </>
    )
}