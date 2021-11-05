interface Props  {
    innerText: string
}

export default function TextBtn ({innerText}: Props) {
    return (
        <p className="textBtn">{innerText}</p>
    )
}