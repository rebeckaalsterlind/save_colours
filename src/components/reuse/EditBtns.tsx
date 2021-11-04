export default function EditBtns () {

    const handleClick = (evt:React.MouseEvent) => {
        const { target } = evt; 

        switch((target as HTMLParagraphElement).id) {
            case "share":
                console.log('share project');
            break;

            case "edit":
                console.log('edit project');
            break;

            case "delete":
                console.log('delete project');
            break;

            default:
            return null
        }
    }

    return (
        <aside style={{display:'inline'}}>
            &nbsp;&nbsp;<i 
            id="share" 
            onClick={handleClick} 
            className="fas fa-share-alt">&nbsp; &nbsp;</i>
            <i 
            id="edit" 
            onClick={handleClick} 
            className="fas fa-edit">&nbsp; &nbsp;</i>
            <i 
            id="delete" 
            onClick={handleClick} 
            className="fas fa-trash-alt"></i>
        </aside>
    )
}