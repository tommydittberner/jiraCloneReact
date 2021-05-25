import './Dialog.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

export default function ConfirmationDialogHeader({issueId, closeDialog}) {
    return (
        <div className="dialog-header-row">
            <h1 className="dialog-title">Delete issue RFM-{issueId}?</h1>
            <FontAwesomeIcon
                className="dialog-close-btn"
                onClick={closeDialog}
                icon={faWindowClose}
                size="2x"
            />
        </div>
    );
}