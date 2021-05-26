import './Dialog.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {DialogHeader, FAActionIconButton, H1NoMargin} from "../../styles/styles";

export default function ConfirmationDialogHeader({issueId, closeDialog}) {
    return (
        <DialogHeader>
            <H1NoMargin>Delete issue RFM-{issueId}?</H1NoMargin>
            <FAActionIconButton>
                <FontAwesomeIcon
                    onClick={closeDialog}
                    icon={faWindowClose}
                    size="2x"
                />
            </FAActionIconButton>
        </DialogHeader>
    );
}