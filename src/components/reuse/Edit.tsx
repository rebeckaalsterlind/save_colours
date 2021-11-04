import '../MainApp/addOptions.css';

interface Props {
  toEdit: any,
  callback(hideComponent: boolean):void;
}

export default function Edit({toEdit, callback}: Props) {

  const headName:any = Object.values(toEdit)[1];
  const obj:any = Object.values(toEdit)[2];

  let subName:string = "";
  const sub = [];

  for (let i in obj) {
    
    sub.push(Object.values(obj[i])[1]);
    
    switch(Object.keys(obj[i])[1]) {    
      case "projectName":
        subName = "Projekt: "
        break;
      case "roomName":
        subName = "Rum: "
        break; 
      case "colorName":
        subName = "Färger: "
        break;  
    }

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
    onClick={handleClick}>

      <form 
        id="box"
        className="modal-box"
        style={{border: '1px solid black'}}
        onSubmit={handleSubmit}>
        
        <h3>Redigera</h3>

        <h5>{headName} &nbsp;
           <i className="fas fa-edit" /> &nbsp;
        </h5><br />
        
        <h5>{subName}</h5>
        {sub.map((name: any) => (
          <p>{name} &nbsp;
            <i className="fas fa-edit" /> &nbsp;
            <i className="fas fa-trash-alt" />
          </p>
        ))}

        <button>Spara</button>
      </form>
    </div>
   
  )
}

