import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {DialogHeader, ActionIconButton, H1NoMargin} from "../../styles/styles";

export default function CreateDialogHeader({closeDialog}) {
    return (
        <DialogHeader>
            <H1NoMargin>Add a new Issue to the board</H1NoMargin>
            <ActionIconButton>
                <FontAwesomeIcon
                    onClick={closeDialog}
                    icon={faWindowClose}
                    size="2x"
                />
            </ActionIconButton>
        </DialogHeader>
    );
}