interface Props  {
    innerText: string
}

export default function TextBtn ({innerText}: Props) {
    return (
        <p>{innerText}</p>
    )
}