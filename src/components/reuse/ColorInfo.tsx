import React, { useState } from 'react';

interface Props {
    color: any;
}

export default function ColorInfo({ color }: Props) {

    return (
        <div>
            <p>Namn: {color.colorName}</p>
            <p>Kulörkod: {color.colorCode}</p>
            <p>Färgtyp: {color.colorType}</p>
            <p>Glans: {color.gloss}</p>
            <p>Köpt: {color.store}</p>
            <p>Din kommentar: {color.comment}</p>
        
        </div>
    )
}