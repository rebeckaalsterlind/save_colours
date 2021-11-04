import React, { useEffect, useRef } from 'react';
import './colorInfo.css';

interface Props {
    color: any,
    hide(clicked:boolean): void
}


const useClickOutside = (handler:any) => {
    const domNode:any = useRef();

    useEffect(() => {
    let maybeHandler = (evt:any) => {
         if(!domNode.current.contains(evt.target)) handler()
    } 

    document.addEventListener("mousedown", maybeHandler);
     
    return () => {
        document.removeEventListener("mousedown", maybeHandler)
    }

 }, [])

 return domNode;

}

export default function ColorInfo ({color, hide}: Props) {

    console.log('color in colorInfo', color);

    let domNode = useClickOutside(() => hide(false))

    return (
        <div 
        ref={domNode}
            id="wrapper" 
            className="color-wrapper"
            onClick={({target}) => (target as HTMLParagraphElement).id && hide(false)}>
            <ul className="color-box">
                <li>Namn: {color.colorName}</li>
                <li>NCS kod: {color.colorCode}</li>
                {color.colorType && <li>Typ: {color.colorType}</li>}
                {color.gloss && <li>Finish: {color.gloss}</li>}
                {color.comment && <li>Kommentar: {color.comment}</li>}
                {color.store && <li>Butik: {color.store}</li>}
            </ul>   
        </div>
           
    )
}