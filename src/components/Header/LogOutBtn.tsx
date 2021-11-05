import { store } from '../../store';
import { logIn } from '../../actions';

export default function LogOutBtn () {

    return <button  className="btn btn-primary white-btn" onClick={() => store.dispatch(logIn(false))}>Logga ut</button>
    
}