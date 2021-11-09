import '../MainApp/addOptions.css';
import { store } from '../../store';


interface Props {
  toDelete: any,
  callback(hideComponent: boolean): void;
}

export default function Delete({ toDelete, callback }: Props) {
  const obj: any = Object.values(toDelete)[1];
  console.log(toDelete);
  const user = store.getState().user._id;

  const objName: any = toDelete;

  let name: string = "";
  let id: string = "";
  let type: string = "";

  if (objName.projectName) {
    name = objName.projectName;
    id = objName._id;
    type = "project";
  }

  if (objName.roomName) {
    name = objName.roomName;
    id = objName._id;
    type = "room";
  }

  console.log(name);
  console.log(id);
  console.log(type);


  const handleClick = (evt: React.FormEvent): void => {
    evt.preventDefault();
    const { target } = evt;

    switch ((target as HTMLElement).id) {
      //on click outside => close modal
      case "wrapper":
        callback(false);
        break;

      //on click on "Ja" => "Delete" and close modal
      case "yes":
        setTimeout(() => {
          callback(false)

          if (type === "project") {
            deleteProject();
          }

          if (type === "room") {
            console.log("yeppp");
          }
        }, 2000);

        document.getElementById("box")!.innerHTML = `<p>${name} raderad!</p>`;
        break;

      //on click on "Nej" => close modal
      case "no":
        callback(false);
        break;

      default: return;
    }
  }

  const deleteProject = () => {

    fetch(`https://mads-colour-backend.herokuapp.com/api/users/${user}/projects/${id}`, {
      method: "DELETE"
      })
      .then(response => response.json())
      .then(response => {
          console.log(response);
      })
    }

const deleteRoom = () => {

}






return (
  <div
    id="wrapper"
    className="modal-wrapper"
    onClick={handleClick}>
    <div id="box" className="modal-box">
      <h3>Vill du radera {name}?</h3>
      <p><span id="yes" onClick={handleClick}>Ja </span> | <span id="no"> Nej</span></p>
    </div>
  </div>
)
}
