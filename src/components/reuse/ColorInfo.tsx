import React, { useState } from 'react';
interface Props {
    color: Object
}

export default function ColorInfo({ color }: Props) {
    console.log('color in colorInfo', color);

    return (
        <div>colorinfo ska visas som modal</div>
    )
}