import '../MainApp/addOptions.css';


interface Props {
  toDelete: any,
  callback(hideComponent: boolean):void;
}

export default function Delete({toDelete, callback}: Props) {
  const obj:any = Object.values(toDelete)[1];

  const handleClick = (evt:React.FormEvent):void => {
    evt.preventDefault();
    const { target } = evt;
    
    switch((target as HTMLElement).id) {
      //on click outside => close modal
      case "wrapper":
        callback(false);
        break;
      
      //on click on "Ja" => "Delete" and close modal
      case "yes":
        setTimeout(() => {
         callback(false)
        }, 2000);
      
        document.getElementById("box")!.innerHTML = `<p>${obj} raderad!</p>`;
        break;
      
      //on click on "Nej" => close modal
      case "no":
        callback(false);
        break;
      
      default: return; 
    }
  }

  
  return (
    <div
    id="wrapper" 
    className="modal-wrapper" 
    onClick={handleClick}>
      <div id="box" className="modal-box">
        <h3>Vill du radera {obj}?</h3>
        <p><span id="yes" onClick={handleClick}>Ja </span> | <span id="no"> Nej</span></p>
      </div>
    </div>
  )
}
