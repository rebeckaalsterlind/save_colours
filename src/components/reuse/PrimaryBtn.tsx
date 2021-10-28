interface Props  {
    innerText: string
}

export default function PrimaryBtn ({innerText}: Props) {

    return (
        <button>{innerText}</button>
    )
}