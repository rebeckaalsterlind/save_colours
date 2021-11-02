interface Props {
    color: any;
}

export default function ColorInfo ({color}: Props) {

    console.log('color in colorInfo', color);

    return (
        <div><p>{color.colorCode}</p><p>{color.colorType}</p><button>Läs mer</button></div>
    )
}