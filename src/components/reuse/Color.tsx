import React, { useState } from 'react';
import ColorInfo from "../reuse/ColorInfo";

type Props = {
    color: any;
};

interface State {
    showInfo: boolean
}

export default function Color({ color }: Props, state: State) {

    const [showInfo, setShowInfo] = useState(false);

    return (
        <>
            <div 
                onClick={() => setShowInfo(!showInfo)}
                style={{ backgroundColor: "#2d3a80", height: '50px', width: '50px', margin: '.5em' }}>
            </div>
            {showInfo && <ColorInfo color={color} /> }
        </>
    );
}
