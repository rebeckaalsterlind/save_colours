import { store } from '../../store';
import { addColor, addProject } from '../../actions';
import AddColor from '../Forms/AddColor';
import AddProject from '../Forms/AddProject';



export default function AddOptions () {
  


    const add = (evt:React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        const { target } = evt;

        switch ((target as HTMLParagraphElement).id) {
            case "addColor":
              store.dispatch(addColor(true))
   
            break; 

            case "addProject":
              store.dispatch(addProject(true))

            break; 
        }

    }

    return (

        <div>
          <p id="addColor" onClick={add}>Lägg till ny färg</p>
          <p id="addProject" onClick={add}>Lägg till nytt projekt</p>
        </div>
 
    )
}