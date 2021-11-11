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
    const [hex, setHex] = useState("#ffc0cb") // Default hex

    const formatNcs = (colorCode: string) => {
        let rawNcs = colorCode;

        if (colorCode[0] === 's' && colorCode[1] !== ' ' || colorCode[0] === 'S' && colorCode[1] !== ' ') {
            rawNcs = [rawNcs.slice(0, 1), " ", rawNcs.slice(1)].join('');
        }

        const formattedNcs = 'ncs ' + rawNcs;

        return formattedNcs;
    }

    const fetchHex = (ncs: string) => {
        fetch('https://mads-ncsapi.herokuapp.com/', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"ncs": ncs})
        })
        .then(res => res.json())
        .then(data => {
            setHex(data.hexColor[0]);
        })
    }

    const ncs: string = formatNcs(color.colorCode)
    fetchHex(ncs);

    return (
        <div>
            <div className="colorBlock"
                onClick={() => setShowInfo(!showInfo)}
                style={{ backgroundColor: hex }}>
            </div>
            {showInfo && <ColorInfo color={color} hide={hideModal => setShowInfo(hideModal) } /> }
        </div>
    );
}
