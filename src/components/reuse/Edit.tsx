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

  return (
    <div 
    id="wrapper" 
    className="modal-wrapper" 
    onClick={() => callback(false)}>

      <form 
        className="modal-box edit"
        style={{border: '1px solid black'}}>
        
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

