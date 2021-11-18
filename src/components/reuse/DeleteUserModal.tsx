import '../MainApp/addOptions.css';

const DeleteUserModal = () => {

    return (
        <div
            id="wrapper"
            className="modal-wrapper"
            >
            <div id="box" className="modal-box deleteChoiceModal">
                <p className="askDeleteText">Vill du radera ditt konto?</p>
                <div className="deleteChoiceBtnGroup">
                    <button id="yes" className="btn btn-secondary" >Ja</button>
                    <button id="no" className="btn btn-primary" >Nej</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteUserModal;