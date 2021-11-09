import { store } from '../../store';
import { addColor, addProject } from '../../actions';
import './addOptions.css';

interface Props {
    callback(hideComponent: boolean): void;
}

export default function AddOptions({ callback }: Props) {
    const handleClick = (
        evt: React.MouseEvent<HTMLParagraphElement, MouseEvent>
    ) => {
        const { target } = evt;

        switch ((target as HTMLParagraphElement).id) {
            case 'wrapper':
                callback(false);
                break;

            case 'addColor':
                store.dispatch(addColor(true));
                break;

            case 'addProject':
                store.dispatch(addProject(true));
                break;
        }
    };

    return (
        <div id="wrapper" className="modal-wrapper" onClick={handleClick}>
            <div id="box" className="modal-box">
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => callback(false)}
                ></button>
                <p id="addColor" onClick={handleClick}>
                    Lägg till ny färg
                </p>
                <p id="addProject" onClick={handleClick}>
                    Lägg till nytt projekt
                </p>
            </div>
        </div>
    );
}
