import React, { useState } from 'react';
import ShowMoreInfo from "../reuse/ShowMoreInfo";

interface Props {
    color: any;
}

export default function ColorInfo({ color }: Props) {


 const [showInfo, setShowInfo] = useState(false);
    console.log('color in colorInfo', color);

    const showMore = (color:any) => {
        console.log(color);
        console.log("click");
        setShowInfo(!showInfo)
    }

    return (
        <div><p>Kulör: {color.colorCode}</p><p>Produkt: {color.colorType}</p><button onClick={showMore}>Läs mer</button>
        {showInfo && <ShowMoreInfo color={color} /> }
        </div>
    )
}