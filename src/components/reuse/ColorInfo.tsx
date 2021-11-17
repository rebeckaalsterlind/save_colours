import React, { useState, useEffect, useRef } from 'react';
import './colorInfo.css';
import EditBtns from "../reuse/EditBtns"

interface Props {
    color: any;
    hide(clicked: boolean): void;
}

interface State {
    isFinished: boolean
}

const useClickOutside = (handler: any) => {
    const domNode: any = useRef();
    
    useEffect(() => {

        let maybeHandler = (evt: any) => {
            if (!domNode.current.contains(evt.target)) handler();
        };

        document.addEventListener('mousedown', maybeHandler);

        return () => document.removeEventListener('mousedown', maybeHandler);

    }, []);

    return domNode;
};

export default function ColorInfo({ color, hide }: Props, state: State) {
    
    //temp state to get a variety of answers. Should come from db
    const [isFinished, setIsFinished] = useState(color.store);

    let domNode = useClickOutside(() => hide(false));

    return (
        <div
            ref={domNode}
            id="wrapper"
            className="color-wrapper"
        >
            <div className="color-box">
                <div>
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={() => hide(false)}
                    ></button>
                </div>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item first-li">Namn:</li>
                    <li className="list-group-item">{color.colorName}</li>
                </ul>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item first-li">NCS kod:</li>
                    <li className="list-group-item">{color.colorCode}</li>
                </ul>
                {color.colorType &&
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item first-li">Typ:</li>
                        <li className="list-group-item">{color.colorType}</li>
                    </ul>
                }
                {color.gloss && 
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item first-li">Finish:</li>
                        <li className="list-group-item">{color.gloss}</li>
                    </ul>
                }
                {color.comment && 
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item first-li">Kommentar:</li>
                        <li className="list-group-item">{color.comment}</li>
                    </ul>
                }
                {color.store && 
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item first-li">Butik:</li>
                        <li className="list-group-item">{color.store}</li>
                    </ul>
                }

                {/*color.finished should come from db*/}
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item first-li">Färg kvar:</li>
                    <li className="list-group-item">{isFinished ? "Ja" : "Nej"}</li>
                </ul>
        
                <EditBtns obj={color} />
            </div>
        </div>
    );
}
