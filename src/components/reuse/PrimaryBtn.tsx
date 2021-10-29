import Button from 'react-bootstrap/Button';

interface Props  {
    innerText: string
}

export default function PrimaryBtn ({innerText}: Props) {

    return (
        <Button variant="primary" className="btn btn-primary bt-lg">{innerText}</Button>
    )
}