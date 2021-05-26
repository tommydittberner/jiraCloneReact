import './Dialog.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {FAActionIconButton, FAIconButton} from "../../styles/styles";

export default function CreateDialogHeader({closeDialog}) {
    return (
        <div className="dialog-header-row">
            <h1 className="dialog-title">Add a new Issue to the board</h1>
            <FAActionIconButton>
                <FontAwesomeIcon
                    onClick={closeDialog}
                    icon={faWindowClose}
                    size="2x"
                />
            </FAActionIconButton>

        </div>
    );
}