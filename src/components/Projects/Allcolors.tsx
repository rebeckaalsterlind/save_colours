import React from 'react';
import Color from "../reuse/Color";

interface Props {
    sendColors: any;
}

export default function Allcolors({ sendColors }: Props) {

    const colorArray: object[] = [];

    if (sendColors !== undefined){
        for (let i = 0; i < sendColors.length; i++) {
            const roomColors = sendColors[i].rooms;
            for (let i = 0; i < roomColors.length; i++) {
                const seperateColors = roomColors[i].colors;
                for (let i = 0; i < seperateColors.length; i++) {
                    const colors = seperateColors[i];
                    colorArray.push(colors);
                }
            }
        }
    }

    return (
        <div className="allColorsContainer">
            {colorArray.map((color: any) => (
                <div className="allColors">
                    <Color key={color.colorId} color={color} />
                </div>
            ))}
        </div>
    )
}