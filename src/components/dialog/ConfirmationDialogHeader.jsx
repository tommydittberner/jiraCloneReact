import './Dialog.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {FAActionIconButton} from "../../styles/styles";

export default function ConfirmationDialogHeader({issueId, closeDialog}) {
    return (
        <div className="dialog-header-row">
            <h1 className="dialog-title">Delete issue RFM-{issueId}?</h1>
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