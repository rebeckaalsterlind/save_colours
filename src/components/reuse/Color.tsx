type Props = {
    color: string;
};

export default function Color({ color }: Props) {
    return <div style={{ backgroundColor: `${color}` }}></div>;
}
