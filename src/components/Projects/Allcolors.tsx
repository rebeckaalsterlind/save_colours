import React from 'react';
import Color from "../reuse/Color";

interface Props {
    sendColors: any;
}


export default function Allcolors({ sendColors }: Props) {

    console.log(sendColors);



    const colorArray: object[] = [];

    const rooms: any = sendColors.map((p: any) => (p.rooms));
    console.log(rooms);


    for (let i = 0; i < sendColors.length; i++) {
        const roomColors = sendColors[i].rooms;
        console.log(roomColors);
            for (let i = 0; i < roomColors.length; i++) {
            const seperateColors = roomColors[i].colors;
            console.log(roomColors);
            for (let i = 0; i < seperateColors.length; i++) {
                const colors = seperateColors[i];
                colorArray.push(colors);

            }

        }
console.log( colorArray);

     
    }

    return (
        <div>
            {
                colorArray.map((color: any) => (
                    <div className="Allcolors">
                        <Color key={color.colorId} color={color} />
                    </div>

                ))
            }


        </div>
    )
}