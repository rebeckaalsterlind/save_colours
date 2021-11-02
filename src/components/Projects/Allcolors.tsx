import React from 'react';

interface Props {
    sendColors: any;
}


export default function Allcolors({ sendColors }: Props) {
    console.log(sendColors);

    const colorArray: object[] = [];
    const rooms: any = sendColors.map((p: any) => (p.rooms));

    for (let i = 0; i < rooms.length; i++) {
        const roomColors = rooms[i];
        for (let i = 0; i < roomColors.length; i++) {
            const seperateColors = roomColors[i].colors;
            for (let i = 0; i < seperateColors.length; i++) {
                const colors = seperateColors[i];
                console.log(colors);
                colorArray.push(colors);

            }
        }
    }

console.log(colorArray);


    return (
        <div>
            { 
                colorArray.map((color: any) =>  (
                    <p key={Math.random()}>{color.colorCode}</p>
                ))
            }


        </div>
    )
}