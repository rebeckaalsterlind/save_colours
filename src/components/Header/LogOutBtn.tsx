import { store } from '../../store';
import { logIn } from '../../actions';

export default function LogOutBtn () {

    return <button onClick={() => store.dispatch(logIn(false))}>Logga ut</button>
    
}