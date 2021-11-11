import { store } from '../../store';
import { logIn } from '../../actions';

export default function LogOutBtn () {

    const handleClick = () => {
        store.dispatch(logIn(false));
        localStorage.clear();
    }

    return <button className="btn btn-secondary" onClick={handleClick}>Logga ut</button>
    
}