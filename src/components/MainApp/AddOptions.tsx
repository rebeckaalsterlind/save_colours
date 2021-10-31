
export default function AddOptions () {
    
    const add = (evt:React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        const { target } = evt;

        switch ((target as HTMLParagraphElement).id) {
            case "addColor":
            console.log('add Color');
            break; 

            case "addProject":
            console.log('add Project');
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