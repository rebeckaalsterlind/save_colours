import '../MainApp/addOptions.css';

interface Props {
  toShare: any,
  callback(hideComponent: boolean):void
}

export default function Share({toShare, callback}: Props) {

  //on click outside => close modal
  const handleClick = (evt:React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    const { target } = evt;

    if((target as HTMLParagraphElement).id === "wrapper") {
      callback(false);
    }
  }

  //"share" and close modal
  const handleSubmit= (evt:React.FormEvent):void => {
    evt.preventDefault();

    setTimeout(() => {
      callback(false)
      }, 2000);

      document.getElementById("box")!.innerHTML = `<p>Delat!</p>`;

  }
  
  return (
    <div
    id="wrapper" 
    className="modal-wrapper" 
    onClick={handleClick}>

      <form id="box" onSubmit={handleSubmit} className="modal-box">
        <h3>Dela {toShare.projectName} med: </h3>
        <input type="text" placeholder="Användare"/>
        <button>Skicka</button>
      </form>
    </div>
  )
  

}
