import React from 'react';
import Color from "../reuse/Color";

interface Props {
    sendColors: any;
}


export default function Allcolors({ sendColors }: Props) {

    const colorArray: object[] = [];
    const rooms: any = sendColors.map((p: any) => (p.rooms));

    for (let i = 0; i < rooms.length; i++) {
        const roomColors = rooms[i];
        for (let i = 0; i < roomColors.length; i++) {
            const seperateColors = roomColors[i].colors;
            for (let i = 0; i < seperateColors.length; i++) {
                const colors = seperateColors[i];
                colorArray.push(colors);

            }
        }
    }

    return (
        <div>
            { 
                colorArray.map((color: any) =>  (
                    <div>
                    <Color key={color.colorId} color={color} />
                    <p key={Math.random()}>{color.colorCode}</p>
                    </div>
                
                ))
            }


        </div>
    )
}