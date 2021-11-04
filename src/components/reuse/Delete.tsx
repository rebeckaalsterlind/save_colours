
interface Props {
  toDelete: any
}

export default function Delete({toDelete}: Props) {
  const obj:any = Object.values(toDelete)[1];
  return (
    <div>
      Vill du radera {obj}?
    </div>
  )
}
