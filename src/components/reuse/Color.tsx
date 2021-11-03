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
            <div className="colorBlock"
                onClick={() => setShowInfo(!showInfo)}
                style={{ backgroundColor: "#2d3a80" }}>
            </div>
            {showInfo && <ColorInfo color={color} /> }
        </>
    );
}
