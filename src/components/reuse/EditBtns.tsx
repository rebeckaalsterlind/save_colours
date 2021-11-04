import React, { useState } from 'react';
import Share from './Share';
import Edit from './Edit';
import Delete from './/Delete';

interface Props {
    obj: any
}

interface State {
    isShare: boolean,
    isEdit: boolean,
    isDelete: boolean
}

export default function EditBtns ({obj}: Props, state: State) {

    const [isShare, setIsShare] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    const handleClick = (evt:React.MouseEvent) => {
        const { target } = evt; 

        switch((target as HTMLParagraphElement).id) {
            case "share":
                setIsShare(!isShare)
                setIsEdit(false);
                setIsDelete(false);
            break;

            case "edit":
                setIsEdit(!isEdit)
                setIsShare(false);
                setIsDelete(false);
            break;

            case "delete":
                setIsDelete(!isDelete)
                setIsShare(false);
                setIsEdit(false);
            break;

            default:
            return null
        }
    }

    return (
        <>
            <aside style={{display:'inline'}}>
                &nbsp;&nbsp;<i 
                id="share" 
                onClick={handleClick} 
                className="fas fa-share-alt">&nbsp; &nbsp;
                </i>
                <i 
                id="edit" 
                onClick={handleClick} 
                className="fas fa-edit">&nbsp; &nbsp;
                </i>
                <i 
                id="delete" 
                onClick={handleClick} 
                className="fas fa-trash-alt">
                </i>
            </aside>

            {isShare && <Share toShare={obj} />} 
            {isEdit && <Edit toEdit={obj} callback={hide => setIsEdit(hide)} />} 
            {isDelete && <Delete toDelete={obj} />} 
        </>
    )
}