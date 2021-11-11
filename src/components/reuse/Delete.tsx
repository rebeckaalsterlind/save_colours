import '../MainApp/addOptions.css';
import { store } from '../../store';
import { store as reduxStore } from '../../store';
import { isTemplateSpan } from 'typescript';
import { addDelete as addDelete, deleteObject } from '../../actions';

interface Props {
  toDelete: any,
  callback(hideComponent: boolean): void;
}

export default function Delete({ toDelete, callback }: Props) {
  const userprojects = store.getState().user.projects;
  const user = store.getState().user._id;
  const objName: any = toDelete;

  let name: string = "";
  let id: string = "";
  let type: string = "";
  let roomId: any = "";
  let projectId: any = "";

  if (objName.projectName) {
    name = objName.projectName;
    id = objName._id;
    type = "project";
  }

  if (objName.roomName) {
    name = objName.roomName;
    id = objName._id;
    type = "room";
    let project = findParent(userprojects, id);
    projectId = project._id;
  }

  if (objName.colorName) {
    name = objName.colorName;
    id = objName._id;
    type = "color";
    let room = findRoom(userprojects, id);
    roomId = room._id;
    const project = findParent(userprojects, roomId);
    projectId = project._id;

  }

  function findRoom(userprojects: any, id: any, parent = null) {
    for (let i of userprojects) {
      for (let item of i.rooms) {
        let res: any = item._id === id ? parent
          : item.colors && findParent(item.colors, id, item);
        if (res) return res;
      }
    }
  }

  function findParent(userprojects: any, id: any, parent = null) {
    for (let item of userprojects) {
      let res: any = item._id === id ? parent
        : item.rooms && findParent(item.rooms, id, item);
      if (res) return res;
    }
  }

  const handleClick = (evt: React.FormEvent): void => {
    evt.preventDefault();
    const { target } = evt;

    switch ((target as HTMLElement).id) {

      case "wrapper":
        callback(false);
        break;

      case "yes":
        setTimeout(() => {
          callback(false)

          if (type === "project") {
            deleteProject();
          }

          if (type === "room") {
            deleteRoom();
          }

          if (type === "color") {
            deleteColor();
          }
        }, 2000);

        document.getElementById("box")!.innerHTML = `<p>${name} raderad!</p>`;
        break;

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
        const newProjectArray = userprojects.filter((item: any) => item._id !== response._id);

        const updatedUser = reduxStore.getState().user;
        updatedUser.projects = newProjectArray;

        reduxStore.dispatch(deleteObject({ user: updatedUser }));

      })
  }

  const deleteRoom = () => {

    fetch(`https://mads-colour-backend.herokuapp.com/api/users/${user}/projects/${projectId}/rooms/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(response => {

        const foundProject = userprojects.find((p: any) => p._id === projectId)
  
        const newRoomArray = foundProject.rooms.filter((item: any) => item._id !== id);

        foundProject.rooms = newRoomArray; 

        const updatedUser = reduxStore.getState().user;
        updatedUser.projects = userprojects;

        reduxStore.dispatch(deleteObject({ user: updatedUser }));

        console.log(response);

        console.log(userprojects);
        

      })
  }

  const deleteColor = () => {

    fetch(`https://mads-colour-backend.herokuapp.com/api/users/${user}/projects/${projectId}/rooms/${roomId}/colors/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(response => { 
        console.log(response);
        
      //   if(response.colorName) {
        
      //     console.log(userprojects);
                
      //     const foundProject = userprojects.find((p:any) => p._id === projectId)
      //     const foundRoom:any = foundProject.rooms.find((r:any) => r._id === roomId)
      //     const foundColors:any = foundRoom.colors.find((r:any) => r._id !== response._id)
      //     console.log(foundColors);
          
      //     foundRoom.colors.push(foundColors)
      //     console.log(foundRoom);
          

      //    console.log(userprojects.projects);
      
      // };
      })
  }

  return (
    <div
      id="wrapper"
      className="modal-wrapper"
      onClick={handleClick}>
      <div id="box" className="modal-box deleteChoiceModal">
        <p className="askDeleteText">Vill du radera "{name}"?</p>
        <div className="deleteChoiceBtnGroup">
          <button id="yes" className="btn btn-secondary" onClick={handleClick}>Ja</button>
          <button id="no" className="btn btn-primary" onClick={handleClick}>Nej</button>
        </div>
      </div>
    </div>
  )
}
