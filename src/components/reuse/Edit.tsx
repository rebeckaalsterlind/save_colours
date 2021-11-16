import '../MainApp/addOptions.css';

interface Props {
  toEdit: any,
  callback(hideComponent: boolean): void;
}

export default function Edit({ toEdit, callback }: Props) {

  let subName: string = "";
  let name: string = "";

  if (toEdit.projectName) {
    subName = "Projekt: "
    name = toEdit.projectName;
  }

  if (toEdit.roomName) {
    subName = "Rum: "
    name = toEdit.roomName;
  }

  if (toEdit.colorName) {
    subName = "Färg: "
    name = toEdit.colorName;
  }

  //on click outside => close modal
  const handleClick = (evt:React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    const { target } = evt;

    if((target as HTMLParagraphElement).id === "wrapper") {
      callback(false);
    }
  }

   //"save" and close modal
  const handleSubmit = (evt:React.FormEvent):void => {
    evt.preventDefault();

    setTimeout(() => {
      callback(false)
     }, 2000);

     document.getElementById("box")!.innerHTML = `<p>Sparat!</p>`;
  }

  return (
    <div
      id="wrapper"
      className="modal-wrapper"
    onClick={handleClick}
    >
      <form
        id="box"
        className="modal-box"
      onSubmit={handleSubmit}
      >

        <h2>Redigera</h2>
        <h4>{subName}{name} <i className="fas fa-edit" /></h4>

        {toEdit.projectName &&
          toEdit.rooms.map((e: any) =>
            <p>Rum: {e.roomName}
              <i className="fas fa-edit" />
            </p>)
        }

        {toEdit.roomName &&
          toEdit.colors.map((f: any) =>
            <p>Färg: {f.colorName}
              <i className="fas fa-edit" />
            </p>)
        }

        <button className="btn btn-primary">Spara</button>
      </form>
    </div>

  )
}

